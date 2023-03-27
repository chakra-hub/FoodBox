import { Component } from "react";

export default class Search extends Component {
    constructor(props){
        super(props)

    }
    async componentDidMount(){
       this.timer = setInterval(()=>{
            console.log("set interval for 1 sec")
        },1000)
    }

    componentWillUnmount(){
       console.log("component will unmount")
       clearInterval(this.timer)
    }

    render(){
        return (<><div className="search">
            This page is a class based component and loaded using lazy loading
            <p>To Verify Lazy Loading open inspect >> network tab </p></div></>)
    }
}
