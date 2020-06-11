import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function SignInComponent() {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    let history = useHistory();

    //
    // useEffect(() => {
    //     if(window.localStorage.getItem('token')){
    //         history.push('/users');
    //     }
    // }, []);

    function submit() {
        let user={
            email: email,
            password:password,
            username:username
        };

        fetch(`http://localhost:8080/prattle/rest/user/auth`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        });

        // fetch(`http://localhost:8080/prattle/rest/user/getAllUsers`)
        //     .then(res=>res.json())
        //     .then(resp=>console.log(resp))

    }

    return (
        <div className="container">
            <h1>Login</h1>
            <br/>
            <br/>
            <form>
                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label ">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="email"
                               onChange={(e)=>setEmail(e.target.value)}
                               placeholder="email@email.com"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label ">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username"
                               onChange={(e)=>setUsername(e.target.value)}
                               placeholder="Username"/>
                    </div>
                </div>

                <br/>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password"
                               onChange={(e)=>setPassword(e.target.value)}
                               id="password" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <br/>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <btn className="btn btn-primary btn-block wbdv-button wbdv-login" onClick={()=>submit()}>Log in</btn>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignInComponent;
