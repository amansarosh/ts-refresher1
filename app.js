function combine(i1, i2) {
    var result;
    if (typeof i1 === 'number' && typeof i2 === 'number') {
        result = i1 + i2;
    }
    else {
        result = i1.toString() + i2.toString();
    }
    return result;
}
var combinedAges = combine(14, 7);
console.log(combinedAges);
var combinedNames = combine('aman', ' ben');
console.log(combinedNames);
