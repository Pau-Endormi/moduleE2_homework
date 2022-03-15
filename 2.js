var x;

switch (typeof x) {
    case "number":
        console.log("x — числовой тип");
        break;
    case "string":
        console.log("x — строковый тип");
        break;
    case "boolean":
        console.log("x — логический тип");
        break;
    default:
        console.log("Тип x не определён");
}
