import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropsTypeCheck extends Component {
    static defaultProps = {
        name: 'FromNothing'
    }
    static propTypes = {
        name: PropTypes.string
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}