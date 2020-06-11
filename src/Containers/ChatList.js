import React, {Component} from 'react';
import ChatComponent from "./ChatComponent";
import ChatListComponent from "./ChatListComponent";
import './ChatList.css';

class ChatList extends Component {


    render() {
        return (

            <div className="chat-list">
                <h1 style={{paddingLeft:"2%"}}>Prattles</h1>
                {this.props.users.map(user=><ChatListComponent updateChatee={this.props.updateChatee} user={user}/>)}
            </div>

        );
    }
}

export default ChatList;
