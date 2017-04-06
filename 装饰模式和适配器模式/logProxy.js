let api = {
    _apiKey: '123abc456def',
    getUsers: function() { /* ... */ },
    getUser: function(userId) { /* ... */ },
    setUser: function(userId, config) { /* ... */ }
};
function logMethodAsync(timestamp, method) {
    setTimeout(function() {
        console.log(`${timestamp} - Logging ${method} request asynchronously.`);
    }, 0)
}
api = new Proxy(api, {
    get: function(target, key, proxy) {
        var value = target[key];
        console.log(value)
        return function(...arguments) {
            logMethodAsync(new Date(), key);
            return Reflect.apply(value, target, arguments);
        };
    }
});
api.getUsers();


var fn=function () {
    console.log(this)
}
fn.call('xxx')