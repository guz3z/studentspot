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
                <div className="team-channel-header-cont">
                    {members.map(({ user }, i ) => (
                        <div key={i} className='team-channel-header-name'>
                            <Avatar name={user.fullName || user.id} size={32} />
                            <p className="team-channel-name-user">{user.fullName || user.id}</p>
                        </div>
                    ))}

                    {additionalMembers > 0 && <p className='team-channel-name-user'>and {additionalMembers}</p>}
                        
                </div>
            );
        }

        return(
            <div className="team-channel-wrapper">
                <p className="team-channel-header-name"># {channel.data.name}</p>
                <span style={{display: 'flex'}} onClick={() => setIsEditing(true)}>
                    <i className="fas fa-info-circle"></i>
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
        <div className="team-channel-cont-wrap">
            <MessagingHeader />
            <div className="team-channel-header-right">
                <p className="team-channel-header-right-text">{getWatcherText(watcher_count)}</p>
            </div>
        </div>
    ); 
};




