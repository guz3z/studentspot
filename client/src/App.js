import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { HomePage, ChatRoom, MainFeed } from './pages';
import './style.css';

const cookies = new Cookies();

const apiKey = '68z8xjsd4atu';
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if(authToken) {
    client.connectUser({ 
        id: cookies.get('userId'),
        email: cookies.get('email'),
        fullName: cookies.get('fullName'),
        hashedPassword: cookies.get('hashedPassword'),
    }, authToken)
}

function App() {

    if(!authToken) return <HomePage />
    return (
        <div className='app-cont'>

            <Switch>
                <Route path='/chatroom'>
                    <Chat client={client} theme='teamlight'>
                        <ChatRoom />
                    </Chat>
                </Route>
                <Route path='/mainfeed'><MainFeed /></Route>
                
            </Switch>
            
        </div>
    )
}

export default App
