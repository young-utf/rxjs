/**
 * Created by youngmoon on 8/1/15.
 */

var React = require('react'),
    uuid = require('../utils/uuid'),
    EventHandler = require('../utils/eventHandler'),
    TodoActions = require('../actions/TodoActions');

var InputBox = React.createClass({
    addTodo: function (e) {
        e.preventDefault();
        var todos = this.props.todos;
        todos.push({
            id: uuid(),
            title: this.refs.txt.getDOMNode().value,
            completed: false
        });
        this.props.todoStore.observer.onNext(todos);
        //this.props.todoStore.source.subscribe(todos);
        this.refs.txt.getDOMNode().value = '';
    },
    componentWillMount: function () {

    },
    render: function () {
        return (
            <div className="input-box">
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        id="new-todo"
                        ref="txt"
                        autoFocus={true}
                    />
                </form>
            </div>
        );
    }
});

module.exports = InputBox;