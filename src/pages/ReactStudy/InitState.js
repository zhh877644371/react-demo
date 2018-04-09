import React, { Component } from 'react';

export default class InitState extends Component{
    // state = {
    //     name:'fromnothing',
    //     age:20
    // }
    constructor(props){
        super(props);
        this.state = {
            name:'from nothing',
            age: 20
        }
    }

    render(){
        let {name, age} = this.state;
        return (
            <div>
                <h2>Init State</h2>
                {name}  {age}
            </div>
        )
    }
}