import React, {Component} from 'react';
import './ChatList.css';
import Replies from "./Replies";

class MessageComponent extends Component {



 showreplies = () =>{
     this.props.showreply(this.props.message.id)
 }

    render() {
        return (
            <div>
                <div className="row each-message">
                    <div className="col-sm-2">
                       <h5>{this.props.message.from}</h5>
                    </div>
                    <div className="col-sm-11" onClick={this.showreplies}>
                        <h5>{this.props.message.message}</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessageComponent;
