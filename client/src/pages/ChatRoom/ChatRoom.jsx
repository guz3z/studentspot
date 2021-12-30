import React from 'react';
import { ChannelCont, ChannelListCont  } from '../../components/index';
import './chatroom.css';

export function ChatRoom() {
    return (
        <div className='chatroom-cont'>
            <div className="cr-wrapper">
                <ChannelListCont />
                <ChannelCont />
                
            </div>
            
            
        </div>
    )
}


