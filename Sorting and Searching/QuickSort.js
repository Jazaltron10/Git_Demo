function quicksort(values) {
    if (values.length <= 1) {
        return values
    }
    var lessThanPivot = [];
    var greaterThanPivot = [];
    var pivot = values[0];
    for (var i = 1; i < values.length; i++) {
        if (values[i] <= pivot) {
            lessThanPivot.push(values[i]);
        } else {
            greaterThanPivot.push(values[i]);
        }
    }
    return quicksort(lessThanPivot).concat(pivot, quicksort(greaterThanPivot));
}

const testValues = [32, 100, 1, 2, 29, 28, 88, 3, 50, 67, 37, 1, 57, 20, 54, 62, 93, 17, 31, 65, 23, 32, 98, 20, 79, 69, 89, 26, 27, 22,29, 100, 1, 2, 57, 28, 88, 3, 50, 67, 37, 1, 32, 20, 97];

var sorted = quicksort(testValues);
console.log(sorted);


