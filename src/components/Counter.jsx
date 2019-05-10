import React from 'react';
import {connect} from "react-redux";
import {increment, decrement} from "../actions/conterActions";

class Counter extends React.Component{
    handleAdd=()=>{
        this.props.dispatch(increment(this.props.diff));
    }
    render(){
        return (
            <div>
            <span>count is : {this.props.count} </span>
            <button onClick={()=>this.props.dispatch(decrement(this.props.diff))}>-</button>
            <button onClick={this.handleAdd}>+</button>
        </div>
        );
    }
}

export default Counter;
// export default class Counter extends Component{
// constructor(props){
//     super(props);
//     this.state = {count:0};
//     console.log('constructor');
// }

// componentDidMount(){
//     console.log('componentDidMount'); //mounting only happens once 
// }

// handleAdd =(e) =>{
// this.setState({count:this.state.count+1});
// }
// handleSubtract = (e) =>{
//     this.setState({count:this.state.count-1});
// }
// render(){
    
//     return(
//         <div>
//             <span>count is : {this.state.count}</span>
//             <button onclick = {this.handleAdd}>+</button>
//             <button onclick = {this.handleSubtract}>-</button>
//         </div>
//     );
// }
// }
