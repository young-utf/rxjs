/**
 * Created by youngmoon on 8/1/15.
 */

var Rx = require('rx'),
    assign = require('../utils/assign'),
    uuid = require('../utils/uuid');

var TodoActions = {
    create: new Rx.Subject(),
    updateTitle: new Rx.Subject()


};