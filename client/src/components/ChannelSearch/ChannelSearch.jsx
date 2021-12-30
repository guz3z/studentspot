import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';
import './channelsearch.css'

export function ChannelSearch() {

    const [ searchQuery, setSearchQuery ] = useState('');
    const [ loading, setLoading ] = useState(false);

    async function getChannels(textSearch){
        try {
            // TODO: fetch comments
        } catch(err) {
            setSearchQuery('')

        }
    }

    const onSearch = e => {
        e.preventDefault();
        setLoading(true);
        setSearchQuery(e.target.value);
        getChannels(e.target.value);
        

    };

    return (
        <div className='csearch-cont'>
            <div className="csearch-input-cont">
                <i className="fas fa-search"></i>
                <input
                    className='csearch-input-bx' 
                    placeholder='search'
                    type='text'
                    value={searchQuery}
                    onChange={onSearch}>
                </input>

            </div>
            
        </div>
    )
}


