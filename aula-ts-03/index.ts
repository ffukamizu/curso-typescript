function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 * num2;
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

const answer1 = multiply(3, 7);

showanswer(answer1);

const answer2 = sum(6, 5);

showanswer(answer2);
