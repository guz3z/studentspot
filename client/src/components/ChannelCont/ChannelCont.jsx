import React from 'react';
import { Channel, MessageTeam } from 'stream-chat-react';
import { ChannelInner, CreateChannel, EditChannel} from '../index'
import './channelcont.css';

export function ChannelCont( { isCreating, setIsCreating, isEditing, setIsEditing, createType} ) {

    
    if( isCreating ) {
        return (
            <div className='channel-container'>
                <CreateChannel 
                    createType={createType}
                    setIsCreating={setIsCreating}
                />
            </div>
        )
    }

    if( isEditing ) {
        return (
            <div className='channel-container'>
                <EditChannel 
                    setIsEditing={setIsEditing}
                />
            </div>
        )
    }

    const EmptyState = () => (
        <div style={{padding: '10px 0 0 10px'}}>
            <p style={{
                marginBottom: '10px'
            }}>This is the beginning of your chat history</p>
            <p>Send messages, attachments, links, emojis, and more</p>
        </div>
    ) 

    return (
        <div className='channel-cont'>
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i ) => <MessageTeam key={i} {...messageProps} />}
            >
                <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    )
}


