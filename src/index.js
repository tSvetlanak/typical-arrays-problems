exports.min = function min(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    return Math.min(...array);
}




exports.max = function max(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (!array) return 0;
    if (array.length === 0) return 0;
    return array.reduce((a, b) => (a + b)) / array.length;

}
