import React, { Component } from 'react'

export class Sqrtclass extends Component {
    constructor(){
      super();
      this.state={
        count:1
      }
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }
    componentDidUpdate() {
        console.log("Component is Update")
    }
  render() {
    return (
      <div style={{textAlign:'center'}}>
         <h1 style={{color:'blue'}}>Welcome to React App <span style={{fontSize:"18px",fontWeight:200,color:'gray'}}>(Class Component)</span></h1>
         <h4 style={{color:'green'}}>Result = {this.state.count}</h4>
         <button onClick={()=>this.setState({count:this.state.count*5})}>Click</button><br /><br /><br />
         <footer style={{backgroundColor:'black',color:'white',padding:'20px'}}>&copy; 2024 All Rights Reserved</footer>
      </div>
    )
  }
}

export default Sqrtclass
