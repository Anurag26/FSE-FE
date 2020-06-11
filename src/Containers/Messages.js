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
                        {this.props.messages.map(message=>
                            <MessageComponent showreply={this.props.showreply} message={message}/>)}
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-5 type-message-box">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Type a Message"
                                           aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-5"></div>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}

export default Messages;
