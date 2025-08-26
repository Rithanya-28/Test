import React, { Component } from 'react'
import CompB from './CompB'

class CompA extends Component {
    // state={num:0}
    state={num:0,data:""}
    handleChange=()=>{
        this.setState({num:this.state.num+1})
    }
    HandleUpdate=(e)=>
    {
this.setState({data:e.target.value})
    }
    
  render() {
    return (
      
  
        <center>
        <style>
 
        </style>
      <div class="compA">
<button onClick={this.handleChange}>Click</button>
<input onChange={this.HandleUpdate}></input>
<CompB name={this.state.num} value={this.state.data}/>
      </div>
        </center>
    )
  }
}

export default CompA