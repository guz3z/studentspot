import React, { useState } from 'react';
import { ChannelCont, ChannelListCont  } from '../../components/index';
import './chatroom.css';
import 'stream-chat-react/dist/css/index.css'

export function ChatRoom() {

    const [ createType, setCreateType ] = useState('');
    const [ isCreating, setIsCreating ] = useState(false);
    const [ isEditing, setIsEditing ] = useState(false);

    return (
        <div className='chatroom-cont'>
            <div className="cr-wrapper">
                <ChannelListCont 
                    isCreating={isCreating} 
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />
                {/*<ChannelCont 
                    isCreating={isCreating} 
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                />*/}
                
            </div>
            
            
        </div>
    )
}


