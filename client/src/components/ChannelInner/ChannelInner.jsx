import React, { useState } from 'react';
import { MessageList, MessageInput, Thread, Window, useChannelActionContext, Avatar, useChannelStateContext, useChatContext } from 'stream-chat-react';
import './channelinner.css';

export const GiphyContext = React.createContext({});

export function ChannelInner( { setIsEditing } ) {

    const [ giphyState, setGiphyState ] = useState(false);
    const { sendMessage } = useChannelActionContext();

    const overrideSubmitHandler = ( message ) => {
        let updatedMessage = {
            attachments: message.attachments,
            mentioned_users: message.mentioned_users,
            parent_id: message.parent?.id,
            parent: message.parent,
            text: message.text,
        };

        if (giphyState) {
            updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}`};
        };

        if (sendMessage) {
            sendMessage(updatedMessage);
            setGiphyState(false);
        }
    };

    return (
        <GiphyContext.Provider value={{ giphyState, setGiphyState }} >
            <div style={{ display: 'flex', width: '100%'}}>
                <Window>
                    <TeamChannelHeader setIsEditing={setIsEditing}/>
                    <MessageList />
                    <MessageInput overrideSubmitHandler={overrideSubmitHandler} />
                </Window>
                <Thread />
            </div>
        </GiphyContext.Provider>
    )
};

const TeamChannelHeader = ({ setIsEditing }) => {
    const { channel, watcher_count } = useChannelStateContext();
    const { client } = useChatContext();

    const MessagingHeader = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
        const additionalMembers = members.length - 3;

        if ( channel.type === 'messaging') {
            return (
                <div className="team-channel-header-name-wrapper">
                    {members.map(({ user }, i ) => (
                        <div key={i} className='team-channel-header-name-multi'>
                            <Avatar name={user.fullName || user.id} size={32} />
                            <p className="team-channel-header-name-user">{user.fullName || user.id}</p>
                        </div>
                    ))}

                    {additionalMembers > 0 && <p className='team-channel-header-name-user'>and {additionalMembers}</p>}
                        
                </div>
            );
        }

        return(
            <div className="team-channel-header-channel-wrapper">
                <p style={{fontWeight: '800', marginRight: '8px'}}># {channel.data.name}</p>
                <span 
                    style={{
                        color: 'grey', 
                        cursor: 'pointer', 
                        border: '1px solid grey', 
                        width: '14px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        fontSize: '11px'
                    }} 
                    onClick={() => setIsEditing(true)}>
                    i
                </span>
            </div>
        );
    };

    const getWatcherText = (watchers) => {
        if (!watchers) return 'No users online';
        if( watchers === 1) return '1 user online';
            return `${watchers} users online`;
    };

    return (
        <div className="team-channel-header-container"
            style={{
                display: 'flex',
                position: 'relative',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                zIndex: '1',
                borderBottom: '1px solid #2879cf85'
            }}
        
        >
            <MessagingHeader />
            <div className="team-channel-header-right">
                <p className="team-channel-header-right-text">{getWatcherText(watcher_count)}</p>
            </div>
        </div>
    ); 
};




