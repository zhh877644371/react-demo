import React, {Component} from 'react';

import './Page1.css';

import image from './images/tobestrong.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                this is Page1~这里将显示一张图片
                <br/>
                <img src={image}/>
            </div>
        )
    }
}