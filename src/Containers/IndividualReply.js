import React, {Component} from 'react';
import './ChatList.css';
const IndividualReply = ({reply})=>{


    return (
        <div className="individual-reply" >
            <div>
                <div className="row each-message">
                    <div className="col-sm-3">
                        <h5>{reply.from}</h5>
                    </div>
                    <div className="col-sm-9" >
                        <h5>{reply.message}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualReply;
