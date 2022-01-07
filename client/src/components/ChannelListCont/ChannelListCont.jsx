import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { CLCSidebar, ChannelSearch, TeamChannelList, TeamChannelPreview } from '../index';
import Cookies from 'universal-cookie';
import './channellistcont.css'

export function ChannelListCont({ isCreating, setIsCreating, setCreateType, setIsEditing}) {
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
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {... previewProps}
                            type='team'
                        />
                    )} 
                    />
                <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={() => {}}
                    List={(listProps) => (
                        <TeamChannelList 
                            {... listProps}
                            type='messaging'
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType}
                            setIsEditing={setIsEditing}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {... previewProps}
                            type='messaging'
                        />
                    )}  
                />
            </div>
            
        </div>
    )
}


