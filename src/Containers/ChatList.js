import React, {Component} from 'react';
import ChatComponent from "./ChatComponent";
import ChatListComponent from "./ChatListComponent";
import './ChatList.css';

class ChatList extends Component {

    state={
        users:[
            {
                username:"Anurag",
                email:"anurag@anurag.com"
            },
            {
                username:"Swapnil",
                email:"swapnil@swapnil.com"
            },
            {
                username:"Sajag",
                email:"sajag@sajag.com"
            },
            {
                username:"Sasank",
                email:"sasank@sasank.com"
            }
        ]
    }

    render() {
        return (

            <div className="chat-list">
                <h1 style={{paddingLeft:"2%"}}>Prattles</h1>
                {this.state.users.map(user=><ChatListComponent updateChatee={this.props.updateChatee} user={user}/>)}
            </div>

        );
    }
}

export default ChatList;
