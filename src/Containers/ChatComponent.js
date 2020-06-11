import React, {Component} from 'react';
import ChatList from "./ChatList";
import Messages from "./Messages";
import Replies from "./Replies";

class ChatComponent extends Component {

    state={
        showReply:false,
        showreply:-1,
        replies:[{
            id:3,
            from:'User-1',
            message:'This is a reply',
            messageId:1
        },
            {
                id:3,
                from:'User-1',
                message:'This is a reply two',
                messageId:2
            }
        ],
        chattingWithUser:'Chat-Box',
        user:'Hello',
        messages:[{
            id:1,
            from:'User-1',
            to:'user-2',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquam quam.' +
                ' In quam ante, lacinia blandit leo eu, tincidunt.'
        },
            {
                id:2,
                from:'User-2',
                to:'user-1',
                message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis pretium ex' +
                    ', vitae rutrum dui. Vestibulum ut dapibus ex. Curabitur.'
            },
            {
                id:1,
                from:'User-1',
                to:'user-2',
                message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquam quam.' +
                    ' In quam ante, lacinia blandit leo eu, tincidunt.'
            },
            {
                id:2,
                from:'User-2',
                to:'user-1',
                message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis pretium ex' +
                    ', vitae rutrum dui. Vestibulum ut dapibus ex. Curabitur.'
            },
            {
                id:1,
                from:'User-1',
                to:'user-2',
                message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquam quam.' +
                    ' In quam ante, lacinia blandit leo eu, tincidunt.'
            },
            {
                id:2,
                from:'User-2',
                to:'user-1',
                message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis pretium ex' +
                    ', vitae rutrum dui. Vestibulum ut dapibus ex. Curabitur.'
            },
            {
                id:1,
                from:'User-1',
                to:'user-2',
                message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac aliquam quam.' +
                    ' In quam ante, lacinia blandit leo eu, tincidunt.'
            },
            {
                id:2,
                from:'User-2',
                to:'user-1',
                message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis pretium ex' +
                    ', vitae rutrum dui. Vestibulum ut dapibus ex. Curabitur.'
            }
        ]
    }

    updateChatee = (name) =>{
        this.setState({
            chattingWithUser:name
        });
    }

    showReply = (id) =>{
        this.setState({
            showreply:id,
            showReply: true
        })
    };


    render() {
        return (
            <div>
                <div className="row">

                </div>
               <div className="row chat">
                   <div className="col-sm-2">
                    <ChatList updateChatee={this.updateChatee}/>
                   </div>

                   <div className="col-sm-5">
                       <Messages showreply={this.showReply} messages={this.state.messages} user={this.state.chattingWithUser}/>
                   </div>
                   <div className="col-sm-5">
                       {this.state.showReply && <div className="col-sm-12">
                           <Replies replies={this.state.replies}/>
                       </div>}
                   </div>
               </div>
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
        );
    }
}

export default ChatComponent;
