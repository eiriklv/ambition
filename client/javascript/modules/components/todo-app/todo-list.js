/** @jsx React.DOM */

'use strict';

var React = require('react');

// sub-components
var TodoItem = require('./todo-item');

module.exports = React.createClass({
    displayName: 'TodoList',

    render: function() {
        var createItem = function(item) {
            return (
                <TodoItem
                    handleComplete={this.props.handleComplete}
                    handleStar={this.props.handleStar}
                    key={item._id}
                    text={item.text}
                    complete={item.complete}
                    star={item.star}
                />
            );
        }.bind(this);

        return (
            <ul className='list-group'>
                {this.props.items.map(createItem)}
            </ul>
        );
    }
});
