/**
 * Created by youngmoon on 8/1/15.
 */

var React = require('react');


var TodoList = React.createClass({
    render: function () {
        var todos = this.props.todos || [] ;
        return (
            <div className="todo-list">
            	<ul>
                    {
                        todos.map(function (data, index) {
                            return (
                                <li key={index}>
                                    {data.title}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
});

module.exports = TodoList;