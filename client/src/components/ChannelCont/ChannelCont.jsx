import React from 'react';
import { Channel, useChatContext } from 'stream-chat-react';
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from '../index'

import './channelcont.css';

export function ChannelCont( { isCreating, setIsCreating, isEditing, setIsEditing, createType} ) {

    const { channel } = useChatContext(); //gives us information of current specific channel

    if( isCreating ) {
        return (
            <div className='channel-cont-creating'>
                <CreateChannel 
                    createType={createType}
                    setIsCreating={setIsCreating}
                />
            </div>
        )
    }

    if( isEditing ) {
        return (
            <div className='channel-cont-editing'>
                <EditChannel 
                    setIsEditing={setIsCreating}
                />
            </div>
        )
    }

    const EmptyState = () => (
        <div className='channel-cont-empty-cont'>
            <p className="channel-empty-first">This is the beginning of your chat history</p>
            <p className="channel-empty-second">Send messages, attachments, links, emojis, and more</p>
        </div>
    ) 

    return (
        <div className='channel-cont'>
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i ) => <TeamMessage key={i} {...messageProps} />}
            >
                <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    )
}


