/**
 * Created by youngmoon on 8/1/15.
 */

var Rx = require('rx'),
    uuid = require('../utils/uuid'),
    store = require('../utils/store'),
    source = Rx.Observable.create(function (observer) {

    });

var TodoActions = {
    create: new Rx.Subject(),
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