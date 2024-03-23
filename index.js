let random = Math.random();
console.log(random);
let first = prompt("Enter First Number");
let oper = prompt("Enter Operation");
let second = prompt("Enter Second Number");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if (random> 0.1) {
    console.log(`The result is ${first} ${oper} ${second}`);
    alert(`The result is ${eval(`${first} ${oper} ${second}`)}`)
} else {
    second = boj[second]
    alert(`The result is ${eval(`${first} ${oper} ${second}`)}`)
}