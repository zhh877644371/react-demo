import React, { Component } from 'react';

export default class StateDemo extends Component {
    //初始化state的两种方式
    state = {
        name: 'zhanghao',
        age: 21,
        salary: 5000,
        books: ['java','c++','js']
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name:'fromnothing',
    //         age:20
    //     }
    // }
    handleClick = () =>{
        let books = [...this.state.books];
        books.push('nodejs');
        this.setState({books});
    }

    render() {
        let { name, age, salary, books} = this.state;
        return (
            <div>
                <h2>setState</h2>
                {name} {age} {salary} {
                    books.map((book) => (<div>{book}</div>))
                }
                <br />
                <button onClick = {this.handleClick}>age+1</button>
            </div>
        )
    }
}