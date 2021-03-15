import React, { Component } from 'react'


export default class Header extends Component{

    state = {
        text: ""
    }

    changeSearch = (text) => {
        this.setState({text: text})
    }



    render(){
        return(
            <h1>Welcome To React</h1>
            
        )
    }
}

