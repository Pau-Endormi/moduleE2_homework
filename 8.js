let map = new Map([
    [12, "twelve"],
    [16, "sixteen"],
    [32, "thirty two"]
]);

for (let name of map.keys()) {
    console.log(`Ключ — ${name}, значение — ${map.get(name)}`);
}
