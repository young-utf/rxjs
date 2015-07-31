/**
 * Created by youngmoon on 8/1/15.
 */

var Rx = require('rx'),
    assign = require('../utils/assign'),
    store = require('../utils/store');


// store 은 2개의 스트림을 노출시킨다.
// updates: todo list 에 적용될 작용을 받는다.
// todos: 최신의 todo list 을 가지는 observable 이다.

function TodoStore () {

}