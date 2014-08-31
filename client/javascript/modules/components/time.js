/** @jsx React.DOM */

'use strict';

var React = require('react');

var SetIntervalMixin = require('../mixins/set-interval');

var moment = require('moment')

module.exports = React.createClass({
    displayName: 'CountDown',

    mixins: [SetIntervalMixin],

    componentDidMount: function() {
        this.setInterval(this.tick, 1000); // Call a method on the mixin
    },

    tick: function() {
        this.setState({time: (new Date())});
    },

    render: function() {
        return (
            <div className='well'>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </div>
        );
    }
});
