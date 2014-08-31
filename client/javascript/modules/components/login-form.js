/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'LoginForm',

    render: function () {
        return (
            <form role='form' action='/login' method='post'>
                <div className='form-group'>
                    <input type='password' className='form-control' id='token' name='token' placeholder='Speak friend, and enter' />
                </div>
            </form>
        );
    }
});
