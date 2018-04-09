import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
                <li><Link to="/funcdemo">FuncDemo</Link></li>
                <li><Link to="/propstypecheck">PropsTypeCheck</Link></li>
                <li><Link to="/initstate">InitState</Link></li>
                <li><Link to="/statedemo">StateDemo</Link></li>
                <li><Link to="/asyncstate">AsyncState</Link></li>
            </ul>
        )
    }
}