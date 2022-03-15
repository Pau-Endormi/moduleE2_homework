var arr = [7, 2, 5, 8, 4, 0, null, "A", true];

var evenNum = 0;
var oddNum = 0;
var zeros = 0;
var other = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        if (arr[i] === 0) {
            zeros += 1;
        } else if (arr[i] % 2 === 0) {
            evenNum += 1;
        } else if (arr[i] % 2 !== 0) {
            oddNum += 1;
        }
    } else {
        other += 1;
    }
}

console.log(`Количество чётных чисел: ${evenNum}`);
console.log(`Количество нечётных чисел: ${oddNum}`);
console.log(`Количество нулей: ${zeros}`);
console.log(`Количество нечисловых элементов: ${other}`);
