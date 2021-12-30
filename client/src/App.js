import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { HomePage } from './pages';
import './style.css'

const apiKey = '68z8xjsd4atu';

const client = StreamChat.getInstance(apiKey);

function App() {
    return (
        <div className='app-cont'>
            <HomePage />
            <Chat client={client} theme='team light'>

            </Chat>
            
        </div>
    )
}

export default App
