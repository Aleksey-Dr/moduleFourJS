"use strict"

// Module four JS. Lesson seven. Collback and arrow function

// function
// callback function
console.log('Exemple one. Callback function');

function greet(name) {
    console.log(`Welcom ${name}!`)
    return `Welcom ${name}!`;
}

console.log(greet('Aleksey'));
console.log(greet);

// higher order function
function registerGuest(name, callback) {
    console.log(`Register gest ${name}.`);
    callback(name);
}

registerGuest('Artiom', greet);

// inline callback function
console.log('Exemple tree. Inline calback function');

function registerGuestOne(name, callback) {
    console.log(`Register guest ${name}.`);
    callback(name);
}

registerGuestOne('Ivan', function greetOne(name) {
    console.log(`Welcome ${name}.`);
});

registerGuestOne('Hennadii', function notify(name) {
    console.log(`Dear ${name}, your number will be ready in 30 minutes.`);
});

// several callback
console.log('Exemple four. Several callbacks');

// function without colbacks
function processCall(recipient) {
    const isRecipientAvailable = Math.random() > 0.5;

    if (!isRecipientAvailable) {
        console.log(`The subscriber ${recipient} is not available, leave message.`);
    } else {
        console.log(`Connecting with ${recipient}, pleas wait...`);
    }
}

processCall('Mxim');

// function with callbacks
function processCallOne(recipient, onAvalaible, onNotAvalaible) {
    const isRecipientAvalaible = Math.random() > 0.5;
    
    if (!isRecipientAvalaible) {
        onAvalaible(recipient);
        return;
    }

    onNotAvalaible(recipient);
}

function takeCall(name) {
    console.log(`Connecting with ${name}, pleas wait...`);
}

function activateAnsweringMachine(name) {
    console.log(`The subscriber ${name} is not avalaible, leave message.`);
}

function leaveHoloMessage(name) {
    console.log(`The subscriber ${name} is not avalaible, recording hologram`);
}

processCallOne('Andrey', takeCall, activateAnsweringMachine);
processCallOne('Anton', takeCall, leaveHoloMessage);

// abstraction repeat
console.log('Abstraction repeat.');
console.log('Cycle.');

const n = 3;

for (let i = 0; i < n; i += 1) {
    console.log(i);
}

// abstraction
console.log('Abstraction.');

function repeatLog(n) {
    for (let i = 0; i < n; i += 1) {
        console.log(i);
    }
}

repeatLog(5);

// Exemple
function printValue(value) {
    console.log(value);
}

function prettyPrint(value) {
    console.log('Logging value: ', value);
}

function repeat(n, action) {
    for (let i = 0; i < n; i += 1) {
        action(i);
    }
}

repeat(2, printValue);
repeat(3, prettyPrint);

// Method forEach
console.log('Metod forEach.');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(`Index: ${i}, value: ${numbers[i]}`);
}

numbers.forEach(function (number, index) {
    console.log(`Index: ${index}, value: ${number}`);
});

// arrow functions
console.log('Arrow functions.');

classicAdd(1, 2, 3);

function classicAdd(a, b, c) {
    return a + b + c;
}

console.log(classicAdd());

//if several parameters
const arrowAdd = (a, b, c) => {
    return a + b + c;
};

console.log(arrowAdd(1, 2, 3));

// if one a parameter
const arrowLog = name => {
    console.log(name);
};

arrowLog('Alekseii');

// if without a parameter
const arrowLogHello = () => {
    console.log('Hello!');
};

arrowLogHello();

// Implicit return
console.log('Implicit return.');

const add = (a, b, c) => {
    return a + b + c;
};

console.log(add(1, 2, 5));

const multiply = (a, b, c) => a * b * c;

console.log(multiply(1, 2, 3));

// arguments, rest
const words = (...args) => {
    console.log(args);
};

words('word one', 'word two', 'word tree', '...',);

// arrow functions as callbacks
const numbersOne = [10, 20, 30, 40, 50,];

numbersOne.forEach(function (number, index) {
    console.log(`Index: ${index}, value: ${number}.`);
});

numbersOne.forEach((number, index) =>
    console.log(`Index: ${index}, value: ${number}.`));

const logMessage = (number, index) => {
    console.log(`Index: ${index}, value: ${number}.`);
};

console.log(logMessage);

numbersOne.forEach(logMessage);

// varieties code
console.log('Varieties code.');
console.log('Imperative programming.');

const numbersTwo = [100, 200, 300, 400, 500, 600, 700, 800,];
const filteredNumbers = [];

for (let i = 0; i < numbersTwo.length; i += 1) {

    if (numbersTwo[i] > 400) {
        filteredNumbers.push(numbersTwo[i]);
    }
}

console.log(filteredNumbers);

console.log('Declarative programming.');
const filteredNumbersOne = numbersTwo.filter(value => value > 500);
console.log(filteredNumbersOne);

// Module four. Lesson eight. Iterating array methods

// Ditry function
console.log('Dirty function.');

const dirtyMultiply = (array, value) => {
    console.log(`Array before function implementation: ${array}.`);
    for (let i = 0; i < array.length; i += 1) {
        array[i] = array[i] * value;
    }
    console.log(`Array after function implementation: ${array}.`);
};

const numbersThree = [1000, 2000, 3000, 4000,];

dirtyMultiply(numbersThree, 2);

console.log(numbersThree);

// Pure function
console.log('Pure function.');

const pureMultiply = (array, value) => {
    console.log(`Array before function implementation ${array}.`);

    const newArray = [];

    array.forEach(element => {
        newArray.push(element * value);
    });

    console.log(`Array after function implementation ${array}.`);

    return newArray;
};

console.log(pureMultiply(numbersThree, 2));

// Iteration array methods

// Method map()
console.log('Method map()');
const numbersFour = [850, 750, 650, 550, 450, 350, 250, 150, 50,];
const addFifty = numbersFour.map(number => number + 50);
console.log(addFifty);

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase);

const students = [
  { name: 'Andrey', score: 83 },
  { name: 'Aleksey', score: 59 },
  { name: 'Ivan', score: 37 },
  { name: 'Maxim', score: 94 },
  { name: 'Nikolay', score: 64 },
];

const names = students.map(student => student.name);

console.log(names);

// Method flatMap()
console.log('Method flatMap().');

const studentsOne = [
  { name: 'Andrey', courses: ['mathematics', 'fisics'] },
  { name: 'Aleksey', courses: ['informatics', 'mathematics'] },
  { name: 'Ivan', courses: ['fisics', 'biology'] },
];

console.log(studentsOne.map(student => student.courses));

console.log(studentsOne.flatMap(student => student.courses));

const studentsTwo = [
    {
        name: 'Andrey',
        courses: [
            ['mathematics', 'fisics'],
            ['informatics', 'mathematics'],
            ['fisics', 'biology'],
        ],
    },
    {
        name: 'Aleksey',
        courses: [
            ['informatics', 'mathematics'],
            ['mathematics', 'fisics'],
            ['fisics', 'biology'],
        ],
    },
    {
        name: 'Ivan',
        courses: [
            ['fisics', 'biology'],
            ['mathematics', 'fisics'],
            ['informatics', 'mathematics'],
        ],
    },
];

console.log(studentsTwo.flatMap(student =>
    student.courses.flatMap(cours => cours)));

// Method filter()
console.log('Method filter()');

const values = [51, -3, 27, 21, -68, 42, -37,];

const positiveValues = values.filter(value => value > 0);
console.log(positiveValues); // [51, 27, 21, 42]

const bigValues = values.filter(value => value > 100);
console.log(bigValues); // []

console.log(values.map(value => value > 0));
// [true, false, true, true, false, true, false]

// unique elements
console.log('Unique elements');

const allCourses = studentsOne.flatMap(student => student.courses);
console.log(allCourses);

// console.log(studentsOne.filter(course => console.log(course)));
// console.log(studentsOne.filter(course => console.log(course.courses)));
    
const uniqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index);

console.log(uniqueCourses);

console.log('My example')

const array = allCourses.filter(
    (course, index, array) => {
        console.log(array);
        console.log(index);
        console.log(course);
    });

console.log(array);

const numbersFive = [1, 2, 3, 1, 4, 5, 1, 6, 7, 1, 8, 9,];
console.log(numbersFive.indexOf(1));

// Method find()
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find(color => color.label === 'indigo'));
console.log(colorPickerOptions.find(color => color.label === 'black'));

// Method findIndex()
console.log('Method findIndex.');

console.log(colorPickerOptions.findIndex(option => option.label === 'pink')); // 3
console.log(colorPickerOptions.findIndex(option => option.label === 'white')); // -1

// Methods every() and some()
console.log('Methods every()');

console.log(numbersFive.every(number => number > 0));
console.log(numbersFive.every(number => number > 1));
console.log(numbersFive.every(number => number < 10));

console.log('Methods some()');

console.log(numbersFive.some(number => number > 0));
console.log(numbersFive.some(number => number > 1));
console.log(numbersFive.some(number => number < 10));
console.log(numbersFive.some(number => number > 10));

const fruits = [
    { name: 'apples', amount: 100 },
    { name: 'bananas', amount: 0 },
    { name: 'grapes', amount: 50 },
];

console.log(fruits.every(fruit => fruit.amount === 0));
console.log(fruits.some(fruit => fruit.amount === 0));

// Method reduce()
console.log('Method reduce()');

// const totall = [5, 9, 4, 9, 5, 6,].reduse((previousValue, number) => {
//     return previousValue + number;
// }, 0);

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

// Video. Module four. Lesson 7. Callback-function and closures
// Function - it is value!
// Exemple 1
const fnA = function (message, callback) {
    console.log(message, callback());
    
}

// fnA('Hello!');

const fnB = function () {
    console.log('World!!!');
}

fnA('Hello!', fnB);

// Exemple 2
// Reusable-code
console.log('Exemple 2')
console.log('Reusable code')
const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log('Result:', result);
}

const addXY = function (x, y) {
    return x + y;
}

const subXY = function (x, y) {
    return x - y;
}

doMath(2, 3, addXY);
doMath(10, 2, subXY);

// Exemple 3
console.log('Exemple 3');

const buttonRef = document.querySelector('.js-button');

const handleButtonClick = function () {
    console.log('Click to button');
};

buttonRef.addEventListener('click', handleButtonClick);

// filter (not filter())
console.log('filter (not filter())');

const filter = function (value, array) {
    const filteredArray = [];

    for (const element of array) {
        if (value < element) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

console.log(filter(4, [1, 2, 3, 4, 5, 6, 7, 8, 9]))

const filterOne = function (array, callback) {
    const filteredArray = [];
    for (const element of array) {
        if (callback(element) === true) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};

console.log(filterOne([10, 20, 30, 40, 50, 60, 70, 80, 90],
    value => value > 30));

console.log(filterOne(
    ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn'],
    value => value === 'Earth' || value === 'Mars' || value === 'Jupiter',
));

let a = 1;
console.log(a === 1 || a === 2);

// closures
console.log('Closures. Exemple 1');

const fnC = function (parameter) {
    const innerVariable = 'value';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
    }

    return innerFunction;
};

console.log(fnC(100));

const fnD = fnC(100);
fnD();
console.log(fnD());

console.log('Closures. Exemole 2. Rouder');

const rounder = function (number, places) {
    return Number(number.toFixed(places));
}

console.log(rounder(3.2658, 2));

const rounderA = function (number) {
    const innerFunction = function (places) {
        console.log(Number(number.toFixed(places)));
    };

    return innerFunction;
}

const number1 = rounderA(3.2658);
number1(3);

// Exemple. Salary
console.log('Exemple. Salary');

const salaryManagerFactory = function (employeeName, baseSalary) {
    let salary = baseSalary;

    return {
        raise(amount) {
            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Currently salary ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Aleksey', 2500);

console.log(salaryManager.current());
console.dir(salaryManager);

console.log(salaryManager.raise(1300));
console.log(salaryManager.current());

// Arrow functions
console.log('Arrow functions');

const addA = function (a, b, c) {
    console.log(arguments);
    return a + b + c;
};

addA(1, 2, 3);

const addB = (a, b, c) => {
    console.log(a, b, c);
    return a + b + c;
};

addB(10, 20, 30);
console.log(addB(10, 20, 30));

const addC = (a, b, c) => a + b + c;

console.log(addC(100, 200, 300));

const addNumber = value => value += 5;
console.log(addNumber(5));

const massage = () => 'Hello!';
console.log(massage());

const fnObj = () => (
    {
        a: 1,
        b: 2,
    }
);
console.log(fnObj());

// Video. Arrow functions
// Implicit
const massageA = () => console.log('Hello!!!');
massageA();

// args
const numbersA = (...args) => {
    console.log(args);
};

numbersA(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Video. Module 4. Lasson 8 part 1
// forEach() vs map()

const numbersB = [50, 60, 70, 80, 90];

console.log(numbersB.forEach(function (number) {
    return number * 2;
}));

console.log(numbersB.map(function (number) {
    return number * 2;
}));

// reduce()
console.log('reduce()');

const numbersC = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(numbersC);

const totalC = numbersC.reduce((acc, number) => {
    console.log('number:', number);
    console.log('acc:', acc);

    return acc + number;
}, 0);

console.log(totalC);

const totalCC = numbersC.reduce((acc, number) => acc + number + 1, 0);

console.log(totalCC);

// Exemple. reduce()
console.log('Exemple. reduce()');

const cart = [
    {label: '🍎', price: 20, quantity: 2,},
    {label: '🍋', price: 50, quantity: 3,},
    {label: '🍑', price: 60, quantity: 4,},
]

const totalAmount = cart.reduce((total, item) =>
    total + item.price * item.quantity, 0);

console.log(totalAmount);

const totalFruits = cart.reduce((total, item) =>
    total + item.quantity, 0);

console.log(totalFruits);

const totalPrice = cart.reduce((total, { price, quantity }) =>
    total + price * quantity, 0);

console.log(totalPrice);