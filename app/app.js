/**
 * Created by youngmoon on 8/1/15.
 */

var Rx = require('rx'),
    React = require('react'),
    TodoStore = require('./store/todoStore'),
    TodoActions = require('./actions/TodoActions'),
    MainView = require('./views/MainView');

var todoStore = new TodoStore('react-todos');

TodoActions.register(todoStore.updates);


React.render(<MainView todoStore={todoStore} />, document.getElementById('todoapp'));