/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'TodoItem',

    handleComplete: function(e) {
        e.preventDefault();
        this.props.handleComplete(this.props);
    },

    handleStar: function(e) {
        e.preventDefault();
        this.props.handleStar(this.props);
    },

    render: function() {
        var itemStyle = {
            textDecoration: 'line-through'
        };

        var highlight = this.props.complete ?
            'list-group-item-success':
            '';

        var star =this.props.star ?
            'fa-star':
            'fa-star-o';

        return (
            <li className={'list-group-item ' + highlight}>
                <a className='btn' onClick={this.handleComplete}><i className='fa fa-lg fa-check'></i></a>
                <a className='btn' onClick={this.handleStar}><i className={'fa fa-lg ' + star}></i></a>
                <span style={this.props.complete ? itemStyle : {}}>
                    {this.props.text}
                </span>
            </li>
        );
    }
});
