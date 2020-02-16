type combinable = number | string

function combine(i1: combinable, i2: combinable) {
    let result;
    if (typeof i1 === 'number' && typeof i2 === 'number') {
        result = i1 + i2;
    } else {
        result = i1.toString() + i2.toString();
    }
    return result;
}

const combinedAges = combine(14, 7);
console.log(combinedAges);

const combinedNames = combine('aman', ' ben');
console.log(combinedNames);