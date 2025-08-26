import React, { Component } from 'react'

export class SessionStatus extends Component {
  state={isLoggedIn: false };
  handleLogin=()=>{
    this.setState((prevState)=>({
      isLoggedIn : !prevState.isLoggedIn
    }));
  };
  render() {
    return (
      <div>
        {this.state.isLoggedIn ?(
      <div>
        <h3>Welcome,user!</h3>

        <button onClick={this.handleLogin}>logout</button>

      </div>
        )
        :
        (
      <button onClick={this.handleLogin}>login</button>
    )}
      </div>
    )
  }
}

export default SessionStatus