import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { CLCSidebar, ChannelSearch, TeamChannelList, TeamChannelPreview } from '../index';
import Cookies from 'universal-cookie';
import './channellistcont.css'

export function ChannelListCont() {
    return (
        <div className='clc-cont'>
            <CLCSidebar />
            <div className="cl-header">
                <p>StudentSpot Chat</p>
                <ChannelSearch />
                <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {... listProps}
                            type='team'
                        />
                    )}
                />
            </div>
            
        </div>
    )
}


