/**
 * Created by youngmoon on 8/1/15.
 */

var React = require('react'),
    Rx = require('rx'),
    InputBox = require('./InputBox'),
    TodoList = require('./TodoList');

var MainView = React.createClass({
    getInitialState: function () {
        return {
        };
    },
    getTodos: function (data) {
        this.setState({
            todos: data
        });
    },
    componentWillMount: function () {
        var self = this;
        this.props.todoStore.source.subscribe(function (data) {
            self.getTodos(data);
        });
    },
    render: function () {
        return (
            <div>
                <InputBox todoStore={this.props.todoStore} todos={this.state.todos} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
});

module.exports = MainView;

