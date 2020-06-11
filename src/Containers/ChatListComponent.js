import React, {Component} from 'react';
import './ChatList.css';
import Messages from "./Messages";
const ChatListComponent = ({user,updateChatee})=>{
    

        return (
            <div className="individual-chat" onClick={()=>updateChatee(user.username)}>
                {user.username}
            </div>
        );
};

export default ChatListComponent;
