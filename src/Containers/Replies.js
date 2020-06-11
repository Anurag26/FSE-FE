import React, {Component} from 'react';
import Messages from "./Messages";
import IndividualReply from "./IndividualReply";

class Replies extends Component {


    render() {
        return (
            <div>
                {this.props.replies.map(reply=>
                    <IndividualReply reply={reply}/>
                )}
            </div>
        );
    }
}

export default Replies;
