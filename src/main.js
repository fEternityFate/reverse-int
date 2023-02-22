module.exports = function reverse (n) {
    var n = n + '';
    return n.split('').reverse().join('');
}