import React from 'react';
import { AddChannel } from '../../assets/AddChannel';
import './teamchannellist.css'

export function TeamChannelList({ children, error = false, loading, type, isCreating, setIsCreating, setCreateType, setIsEditing }) {

    if(error) {
        return type === 'team' ? (
            <div className="team-chan-list-cont">
                <p className="team-chan-list-msg">Connection error, please wait a moment and try again</p>
            </div>
        ) : null
    }

    if(loading) { 
        return (
            <div className="team-chan-list-cont">
                <p className="team-chan-list-msg">
                    { type === 'team' ? 'Channels' : ' Messages' } loading...
                </p>
            </div>

        )
    }

    return (
        <div className='team-chan-list-cont'>
            <div className="team-chan-list-header">
                <p>
                    { type === 'team' ? 'Channels' : 'Direct Messages' }
                </p>
                <AddChannel 
                    isCreating={isCreating}
                    setIsCreating={setIsCreating}
                    setCreateType={setCreateType}
                    setIsEditing={setIsEditing}
                    type={ type === 'team' ? 'team' : 'messaging '}
                />
            </div>
            {children}
            
        </div>
    )
}


