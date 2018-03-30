import React, { Component } from 'react';

import './NotFound.css';

import image from './images/404.jpg';

export default class NotFound extends Component {

    render() {
        return (
            <div className="div1">
                <img src={image} className="img1"/>
            </div>
        )
    }
}