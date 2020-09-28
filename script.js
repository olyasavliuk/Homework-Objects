// // Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// // Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. 
// // (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну. 
// let time, timeDay, timeHours, timeResult;
// let animal = {
//     name: 'Rex',
//     weight: 2,
//     age: 1,
//     averSpeed: 11,
//     animalInfo: function () {
//         return `Name ${this.name}, weight ${this.weight} kg, ${this.age} years old and his average speed is ${this.averSpeed} km/h.`;
//     },
//     animalOpport: function (dist) {
//        time = dist / this.averSpeed;
//        if (time >=12) {
//            timeDay = Math.floor(time / 12);
//            timeHours = Math.ceil(time - timeDay * 12);
//            timeResult = `${this.name} can run distance of ${dist} km in near ${timeDay} days and ${timeHours} hours.`;  
//        } else {
//            timeResult = `${this.name} can run distance of ${dist} km in near ${Math.floor(time)} hours.`;
//        }
//        return timeResult;
//     }
// }
// console.log(animal.animalInfo());
// console.log(animal.animalOpport(1000));

// // Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, 
// // периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.
// let figure = {
//     firstSide: 5,
//     secondSide: 3,
//     perimeter: function () {
//         return this.firstSide * 2 + this.secondSide * 2;
//     },
//     square: function () {
//         return this.firstSide * this.secondSide;
//     },
//     nameFigure: function () {
//         if (this.firstSide === this.secondSide) {
//             figure.name = 'square';
//         } else {
//             figure.name = 'rectangle';
//         }
//     },
//     valueInMeters: function (value) {
//         return `${value} sm is ${value / 100} m.`;
//     },
//     figure3D: function () {
//         figure.thirdSide = 8;
//     }
// }
// figure.nameFigure();
// figure.figure3D();
// console.log(`Perimeter of this figure is ${figure.perimeter()} sm.`);
// console.log(`Square of this figure is ${figure.square()} square sm.`);
// console.log(`This is ${figure.name}.`);
// console.log(figure.valueInMeters(figure.firstSide));
// console.log(figure.thirdSide);

// Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
let i;
let list = [
    {
        name: 'tomato',
        count: 5,
        price: 50,
        buy: false,
        outOfstore: true
    },
    {
        name: 'potato',
        count: 2,
        price: 15,
        buy: true,
        outOfstore: true
    },
    {
        name: 'cucumber',
        count: 4,
        price: 20,
        buy: false,
        outOfstore: false
    },
    {
        name: 'onion',
        count: 3,
        price: 8,
        buy: true,
        outOfstore: false
    },
    {
        name: 'pepper',
        count: 6,
        price: 62,
        buy: false,
        outOfstore: true
    }
];
// // Виводимо список покупок - спочатку ті які є в магазині потім яких немає.
// list.sort(function (a) {
//     if (a.outOfstore === false) {
//         i = -1;
//     } else {
//         i = 0;
//     }
//     return i;
//     }
// )
// console.log(list);

// // Виводимо список покупок які ми купили.
// function buyItems() {
//     console.log(`We have already bought`);
//     for (let j = 0; j < list.length; j++){
//         if (list[j].buy === true) {
//             console.log(list[j].name);
//         }
//     }
// }
// buyItems();

// // Додаємо функцію яка дозволить купити продукт.
// function canBuy () {
//     console.log(`You can buy:`);
//     for (let k = 0; k < list.length; k++) {
//         if (list[k].outOfstore === false) {
//             console.log(list[k].name);
//         }
//     }
// }
// canBuy();

// // Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// function totalCost () {
//     console.log(`Total cost:`);
//     let summary = 0, cost;
//     for (let l = 0; l < list.length; l++) {
//         cost = list[l].count * list[l].price;
//         summary = summary + cost;
//     }
//     console.log(summary);
// }
// totalCost();

// // Додаємо можливість збільшувати кількість товару.
// function riseCount () {
//     let nameRiseCount = prompt('Do you want to increase count of products? Please, write what product it will be.');
//     let countRiseCount;
//     for (let m = 0; m < list.length; m++) {
//         if (list[m].name === nameRiseCount) {
//             countRiseCount = +prompt(`Write how many ${list[m].name} do you need.`);
//             list[m].count = countRiseCount;
//             console.log(list[m]);
//         }
//     }
// }
// riseCount();

// // Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
// function reduceCount () {
//     let nameReduceCount = prompt('Do you want to reduce count of products? Please, write what product it will be.');
//     let countReduceCount;
//     for (let n = 0; n < list.length; n++) {
//         if (list[n].name === nameReduceCount) {
//             countReduceCount = +prompt(`Write how many ${list[n].name} do you need. Now on your list count is ${list[n].count}.`);
//             if (countReduceCount >= 0) {
//                 list[n].count = countReduceCount;
//                 console.log(list[n]);
//             } else {
//                 alert('Your count is less than 0, please write a correct count.');
//             }
//         }
//     }
// }
// reduceCount();

// Task 6
let workers = [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, 
{name: "Ivan", age: 32, hobby: ["cycling", "hiking"], type: "Group/`s member"}, 
{name: "Tanya", age: 25, hobby: ["painting", "travelling"], type: "Admin"},
{name: "Artur", age: 41, hobby: ["language learning", "games"], type: "Group/`s member"}];
let summaryAge = 0 , averageAge;
let hobbyArray = [];
for (let p = 0; p < workers.length; p++) {
    if (workers[p].type ==='Admin') {
        console.log(workers[p].name);
    }
    summaryAge = summaryAge + workers[p].age;
}
averageAge = summaryAge / workers.length;
console.log(`Average age is ${averageAge}`);

