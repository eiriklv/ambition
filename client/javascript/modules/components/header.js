/** @jsx React.DOM */

'use strict';

var React = require('react');
var ReactAsync = require('react-async');

module.exports = React.createClass({
    displayName: 'Header',

    componentWillReceiveProps: function(nextProps) {
        console.log('updating header');
    },

    shouldComponentUpdate: function() {
        return false;
    },

    render: function() {
        return (
            <nav className='navbar navbar-default' role='navigation'>
                <div className='container'>

                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a className='navbar-brand' href='#'>Ambition</a>
                    </div>

                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>

                        <ul className='nav navbar-nav pull-right'>
                            <li><a href='/logout'>Log out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});
