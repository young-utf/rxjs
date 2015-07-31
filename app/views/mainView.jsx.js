/**
 * Created by youngmoon on 8/1/15.
 */

'use strict';

var React           = require('react/addons'),
    Router          = require('director').Router,
    Rx              = require('rx');

var MainView = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentWillMount: function () {
        var todoStore = this.props.todoStore;

        var currentRoute = new Rx.BehaviorSubject(''),
            onNext = currentRoute.onNext;

        var router = Router({
            '/': function () {
                currentRoute.onNext(routes.ALL_TODOS);
            },
            '/active': function () {
                currentRoute.onNext(routes.ACTIVE_TODOS);
            },
            '/completed':function () {
                currentRoute.onNext(routes.COMPLETED_TODOS);
            },
        });

        router.init('/');

        var shownTodos = todoStore.todos
            .combineLatest(
            currentRoute,
            function (todos, currentRoute) {

                var activeTodoCount = todos.reduce(function (accum, todo) {
                    return todo.completed ? accum : accum + 1;
                }, 0);

                var completedCount = todos.length - activeTodoCount;

                var shownTodos = todos.filter(function (todo) {
                    switch (currentRoute) {
                        case routes.ACTIVE_TODOS:
                            return !todo.completed;
                        case routes.COMPLETED_TODOS:
                            return todo.completed;
                        default:
                            return true;
                    }
                }, this);

                return {
                    activeTodoCount: activeTodoCount,
                    completedCount: completedCount,
                    shownTodos: shownTodos,
                    currentRoute: currentRoute
                };
            }
        )
            .subscribe(this.setState.bind(this));
    },
    render: function () {
        return 'hi';
    }
});