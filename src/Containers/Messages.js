import React, {Component} from 'react';
import './ChatList.css';
import MessageComponent from "./MessageComponent";

class Messages extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-light message-chat-box">
                    <h1>{this.props.user}</h1>
                </div>
                { this.props.user!=="Chat-Box" && <div className="row">
                    <div className="col-sm-12 message-box" style={{maxHeight:"50%"}}>
                        {this.props.messages.map(message=><MessageComponent showreply={this.props.showreply} message={message}/>)}
                    </div>
                </div>}
            </div>
        );
    }
}

export default Messages;
