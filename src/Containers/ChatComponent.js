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
        ],
        users:[]
    }

    componentDidMount() {
        let userId = sessionStorage.getItem('user');
        fetch(`http://localhost:8080/prattle/rest/user/getAllUsers`).then(resp=>resp.json())
            .then(users=>{
                users.map(user=>{
                    if(user.id!=sessionStorage.getItem('user'))
                        this.setState(prevState=>({
                            users:[...prevState.users,user]
                        }))
                })
                // console.log(users)
            })
    }

    updateChatee = (user) =>{
        this.setState({
            chattingWithUser:user.name
        });

        // fetch()
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
                    <ChatList users={this.state.users} updateChatee={this.updateChatee}/>
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
            </div>
        );
    }
}

export default ChatComponent;
