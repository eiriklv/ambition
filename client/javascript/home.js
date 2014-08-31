/**
 * @jsx React.DOM
 */
'use strict';

// config
var config = require('./config');
var api = require('./modules/api')(config);

// dependencies
var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// custom components
var TodoApp = require('./modules/components/todo-app');
var Time = require('./modules/components/time');
var Head = require('./modules/components/head');
var Header = require('./modules/components/header');

// Main page component (this is asyncronous)
var App = React.createClass({
    mixins: [ReactAsync.Mixin],

    statics: {
        getAsyncContent: function(callback) {
            superagent.get('http://localhost:3000/api/resource', function (err, res) {
                callback(err, res ? res.body : null);
            });
        }.bind(this)
    },

    getInitialStateAsync: function(callback) {
        callback(null, this.props);
    },

    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description} />
                <body id="reactapp">
                    <Header />

                    <div className="container">
                        <div className="jumbotron text-center">
                            <h1>Follow Your Dreams</h1>
                        </div>
                    </div>

                    <div className="MainPage container">
                        <TodoApp
                            api={api}
                            type='todo'
                            title='TODO'
                            skin='warning'
                            placeholder='What do you need to do?'
                        />
                        <TodoApp
                            api={api}
                            type='focus'
                            title='FOCUS AREAS'
                            skin='success'
                            placeholder='What do you need to focus on?'
                        />
                        <TodoApp
                            api={api}
                            type='project'
                            title='PROJECTS'
                            skin='danger'
                            placeholder='Starting a new project?'
                        />
                        <TodoApp
                            api={api}
                            type='backlog'
                            title='BACKLOG / FROZEN'
                            skin='default'
                            placeholder='What do you need to backlog for later?'
                        />
                        <TodoApp
                            api={api}
                            type='goal'
                            title='GOALS'
                            skin='info'
                            placeholder='What are your goals?'
                        />
                        <TodoApp
                            api={api}
                            type='motivation'
                            title='MOTIVATIONS'
                            skin='danger'
                            placeholder='What are your motivations?'
                        />
                        <TodoApp
                            api={api}
                            type='self'
                            title='SELF DEVELOPMENT'
                            skin='warning'
                            placeholder='Quotes, thoughts and musings'
                        />
                        <TodoApp
                            api={api}
                            type='misc'
                            title='MISCELLANEOUS'
                            skin='info'
                            placeholder='Save some misc stuff..'
                        />
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = App;

if (typeof window !== 'undefined') {
    if (config.environment == 'development') {
        window.React = require('react');
    }

    window.onload = function() {
        React.renderComponent(App(), document);
    }
}
