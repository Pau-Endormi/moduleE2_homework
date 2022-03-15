var user_input = prompt();
var user_input = +user_input;

if (typeof user_input === "number") {
    if (isNaN(user_input)) {
        console.log("Упс, кажется, вы ошиблись.");
    } else if (user_input % 2 === 0) {
        console.log(`${user_input} - это чётное число.`);
    } else {
        console.log(`${user_input} - это нечётное число.`);
    }
}
