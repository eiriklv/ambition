/** @jsx React.DOM */

'use strict';

var React = require('react');

// sub-components
var TodoList = require('./todo-list');
var TodoInput = require('./todo-input');
var TodoDeleteButton = require('./todo-delete-button');

module.exports = React.createClass({
    displayName: 'TodoApp',

    getInitialState: function() {
        return {items: [], index: 0, text: ''};
    },

    componentDidMount: function() {
        this.updateList();
    },

    onChange: function(e) {
        this.setState({text: e.target.value});
    },

    updateList: function() {
        this.props.api.todos.get({
            type: this.props.type
        }, function(err, todos) {
            if (err) return console.log(err);

            this.setState({
                items: todos
            });
        }.bind(this));
    },

    handleSubmit: function(e) {
        // you should not be able to input empty todo's
        if (this.state.text.length < 1) return false;

        e.preventDefault(); // could also use return false

        this.props.api.todos.create({
            text: this.state.text,
            type: this.props.type
        }, function (err, result) {
            if (err) return console.log(err);
            this.setState({ text: ''});
            this.updateList();
        }.bind(this));
    },

    handleStatus: function(action, id) {
        this.props.api.todos.update({
            id: id,
            action: action
        }, function(err, result) {
            if (err) return console.log(err);
            this.updateList();
        }.bind(this));
    },

    handleDelete: function() {
        this.props.api.todos.remove({
            type: this.props.type
        }, function(err, result) {
            if (err) return console.log(err);
            this.updateList();
        }.bind(this));
    },

    handleComplete: function(childProps) {
        var id = childProps.key;
        this.handleStatus('complete', id);
    },

    handleStar: function(childProps) {
        var id = childProps.key;
        this.handleStatus('star', id);
    },

    render: function() {
        var count = this.state.items.length;
        var title = this.props.title;

        return (
            <div className={'panel panel-' + this.props.skin}>
                <div className='panel-heading'>
                    <h3 className='panel-title'>{title} ({count} item{count == 1 ? '' : 's'})</h3>
                </div>
                <div className='panel-body' style={{backgroundColor: 'whitesmoke'}}>
                    <TodoInput
                        handleSubmit={this.handleSubmit}
                        handleChange={this.onChange}
                        handleDelete={this.handleDelete}
                        items={this.state.items.length + 1}
                        text={this.state.text}
                        placeholder={this.props.placeholder}
                    />

                    <TodoDeleteButton handleDelete={this.handleDelete} />
                </div>

                <TodoList
                    items={this.state.items}
                    handleComplete={this.handleComplete}
                    handleStar={this.handleStar}
                />
            </div>
        );
    }
});
