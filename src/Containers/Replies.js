import React, {Component} from 'react';
import Messages from "./Messages";
import IndividualReply from "./IndividualReply";

class Replies extends Component {

    render() {
        return (
            <div>
            <div className="replies-box">
                {this.props.replies.map(reply=>
                    <IndividualReply reply={reply}/>
                )}
            </div>
                <div className="col-sm-5 type-reply-box">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Reply to this thread"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Replies;
