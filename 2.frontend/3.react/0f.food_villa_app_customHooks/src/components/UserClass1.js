import React from "react";
// import {Component} from "react"; You can directly destructure and use Component instead of React.Component

class UserClass1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count1: 1,
            count2: 2
        }
        console.log(this.props.name+" child constructor");
    }
    componentDidMount(){
        console.log(this.props.name+"Child Did Mount")
    }
    componentDidUpdate(){

    }
    componentDidMount(){
        
    }
  render() {
    const {name, location} = this.props;
    const {count1, count2} = this.state; 
    console.log(this.props.name+" child renders");
    return (
      <div className="user-card">
        <h1>Count1: {count1}</h1>
        <h1>Count2: {count2}</h1>
        <button onClick={()=>{
            this.setState({
                count1: this.state.count1 + 1,
                count2: this.state.count1 + 2,
            });
        }}>Increase count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: No phone</h4>
      </div>
    );
  }
}

export default UserClass1;