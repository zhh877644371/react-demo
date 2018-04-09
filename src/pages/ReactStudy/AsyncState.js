import React, { Component } from 'react';

export default class AsyncState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'from nothing',
            age: 20
        }
    }
    handleClick = () => {
        this.setState((preState, props) => {
            return { age: preState.age + 1 };
        })
        this.setState((preState, props) => {
            return { age: preState.age + 1 };
        })
    }

    render() {
        let { name, age } = this.state;
        return (
            <div>
                <h2>AsyncState</h2>
                {name}  {age}
                <br />
                <button onClick={this.handleClick}>age+1</button>
            </div>
        )
    }
}