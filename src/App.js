import React from 'react';
import AuthenticationPage from "./Containers/AuthenticationPage";
import {BrowserRouter,Route} from 'react-router-dom';
import SignInComponent from "./Containers/SignInComponent";
import SignUpComponent from "./Containers/SignUpComponent";
import ChatComponent from "./Containers/ChatComponent";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Route path="/auth" component={AuthenticationPage} />
        <Route path="/signin" exact component={SignInComponent} />
        <Route path="/signup" exact component={SignUpComponent} />
        </BrowserRouter>
    </div>
  );
}

export default App;
