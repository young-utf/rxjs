/**
 * Created by youngmoon on 8/1/15.
 */

var Rx = require('rx'),
    assign = require('../utils/assign'),
    uuid = require('../utils/uuid');

var TodoActions = {
    create: new Rx.Subject(),
    toggle: new Rx.Subject(),
    destroy: new Rx.Subject()
};

TodoActions.register = function (updates) {

    this.create
        .map(function (title) {
            return function (todos) {
                return todos.concat({
                    id: uuid(),
                    title: title,
                    completed: false
                });
            };
        })
        .subscribe(updates);

    this.toggle
        .map(function(todoToToggle) {
            return function (todos) {
                return todos.map(function (todo) {
                    return  todo !== todoToToggle ?
                        todo :
                        assign({}, todo, {completed: !todo.completed});
                });
            };
        })
        .subscribe(updates);

    this.destroy
        .map(function(deletedTodo) {
            return function (todos) {
                return todos.filter(function (todo) {
                    return todo !== deletedTodo;
                });
            };
        })
        .subscribe(updates);
};

module.exports = TodoActions;