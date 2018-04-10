import React, { Component } from 'react';

export default class EventBinding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    handleClickAdd = () => {
        this.setState({ num: this.state.num + 1 })
    }
    handleClickMinus = () => {
        this.setState({ num: this.state.num - 1 })
    }
    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <button onClick={this.handleClickAdd}>add</button>
                <button onClick={this.handleClickMinus}>minus</button>
            </div>
        )
    }
}