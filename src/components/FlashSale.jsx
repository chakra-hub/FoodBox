import { Component } from "react";
export default class FlashSale extends Component{
    
    constructor(props){
        super(props)
        console.log("Constructor")
        this.state = {
            date: '',
            day : '',
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("interval of 1 sec")
        },1000)
    }
    componentDidUpdate(){
        console.log("Component has beed updated")
    }

    componentWillUnmount(){
       clearInterval(this.timer)
    }

    render(){
        console.log("Initial render")
        return(<><div className="flash_sale_container">
                 <h3>Remember the date {this.state.date} March, {this.state.day}</h3>
                 <button onClick={()=>{this.setState({date: 19, day: 'Friday'})}}>Click to know the date</button>
            </div></>)
    }
}