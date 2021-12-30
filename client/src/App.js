import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { HomePage, ChatRoom } from './pages';
import './style.css'

const apiKey = '68z8xjsd4atu';

const client = StreamChat.getInstance(apiKey);

function App() {
    return (
        <div className='app-cont'>

            <Switch>
                <Route exact path='/'><HomePage /></Route>
                <Route path='/chatroom'>
                    <Chat client={client} theme='team light'>
                        <ChatRoom />
                    </Chat>
                </Route>
                
            </Switch>
            
        </div>
    )
}

export default App
