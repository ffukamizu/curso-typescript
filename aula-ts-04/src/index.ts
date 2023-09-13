function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function isEven(num: number) {
    return num % 2 === 0;
}

function showanswer(answer: number) {
    if (isEven(answer)) {
        console.log(`The answer is ${answer} and it's even!`);
    } else {
        console.log(`The answer is ${answer} and it's odd!`);
    }
}

() => {
    const num1: number = Number(prompt('First Number'));
    const num2: number = Number(prompt('Second Number'));
    if (isNaN(num1) || isNaN(num2)) return alert('Type a number');
    let answer = sum(num1, num2);
    answer += multiply(1, 2);
    showanswer(answer);
};
