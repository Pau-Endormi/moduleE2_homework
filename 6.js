var arr = [7, 7, 7];

var check = arr.every(function(el, i) {
    if (i === 0) {
        return true;
    } else if (arr.indexOf(el) !== i) {
        return true;
    } else {
        return false;
    }
});

console.log(check);
