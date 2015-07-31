/**
 * Created by youngmoon on 8/1/15.
 */

var React = require('react'),
    Rx = require('rx'),
    InputBox = require('./InputBox'),
    TodoList = require('./TodoList');

var MainView = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentWillMount: function () {
        var todoStore = this.props.todoStore;
    },
    render: function () {
        return (
            <div>
                <InputBox />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
});

module.exports = MainView;

