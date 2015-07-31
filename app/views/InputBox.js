/**
 * Created by youngmoon on 8/1/15.
 */

var React = require('react'),
    EventHandler = require('../utils/eventHandler'),
    TodoActions = require('../actions/TodoActions');

var InputBox = React.createClass({
    componentWillMount: function () {
        var newFieldKeyDown = EventHandler.create();
        var enterEvent = newFieldKeyDown.filter(function (event) {
            return event.keyCode === 13;
        });

        enterEvent.forEach(function (event) {
            event.stopPropagation();
            event.preventDefault();
        });

        enterEvent
            .map(function (event) {
                return event.target.value.trim();
            })
            .filter(function (value) {
                return !!value;
            }).subscribe(TodoActions.create);

        enterEvent
            .forEach(function (event) {
                event.target.value = '';
            });

        this.handlers = {
            newFieldKeyDown: newFieldKeyDown
        };
    },
    render: function () {
        return (
            <div className="input-box">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    id="new-todo"
                    autoFocus={true}
                    onKeyDown={this.handlers.newFieldKeyDown}
                />
            </div>
        );
    }
});

module.exports = InputBox;