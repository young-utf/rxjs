/**
 * Created by youngmoon on 8/1/15.
 */

module.exports = function store (namespace, data) {
    if (data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
    }

    var localStore = localStorage.getItem(namespace);
    return (localStore && JSON.parse(localStore)) || [];
};