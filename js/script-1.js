'use strict';

// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsey';
// const massege = "Добро пожаловать";
// const isOpen = true;
// const shouldConfirm = false;
// console.log('Возраст:', age);
// const type = typeof totalPrice;
// console.log(type);

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// let quantity = prompt('Введите количество товара');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);
// console.log(typeof elementWidth);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);
// console.log(typeof elementHeight);

// let salary = 1300.163333;
// console.log(Number(salary.toFixed(2)));
// console.log(typeof salary);

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';
// console.log(Number(value));
// console.log(Number(quantity));

// console.log(Math.PI)
// const base = 2;
// const power = 5;
// const result = Math.pow(power, base);
// console.log(base ** 2 );

// let base = prompt('Give me number');
// console.log((Number(base)));
// let power = prompt('Give me power');
// console.log((Number(power)));
// console.log(base ** power);

// const max = 100;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const massege = 'В этой строке 26 символов.';
// console.log(massege.length);

// const firstName = 'Тарас';
// const lastName = 'Сиренко';
// const fullName = firstName + ' ' + lastName;
// const room = 619;
// const type = 'VIP';
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);

// let brand = prompt('brand');
// brand = brand.toLowerCase();
// console.log(brand);

// console.log(10 > 5);
// const x1 = 10;
// const x2 = 30;
// const number = 20;
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
// const res = number > x1 && number < x2;
// console.log(`Число ${number} попадает в отрезок от ${x1} и до ${x2}?`, res);

// const x3 = 10;
// const x4 = 30;
// const numberSecond = 35;
// console.log(`Число ${numberSecond} попадает в отрезок до ${x3}?`, numberSecond < x3);
// console.log(`Число ${numberSecond} попадает в отрезок после ${x4}?`, numberSecond > x4);
// const resSecond = numberSecond < x3 || numberSecond > x4;
// console.log(`Число ${numberSecond} попадает в отрезок до ${x3} или после ${x4}?`, resSecond);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log('Можно открыть чат?', canOpenChat);

// const sub = 'free';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контенту?', canAccessContent);

// const balance = 1000;
// let massege;
// if (balance > 0 && balance <= 1000) {
//     massege = 'Позитивный баланс';
// } else if (balance === 0) {
//     massege = 'Баланс нулевой';
// } else {
//     massege = 'Негативный баланс';
// }
// console.log(massege);

// const balance = 1000;
// const massage = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(massage);
// let apples = 40;
// let userInput = prompt('Ведите количество яблок');
// userInput = Number.parseInt(userInput);
// if (confirm('Добавить')) {
//     apples = apples + userInput;
// } else {
//     apples = apples - userInput;
// }
// alert(`На складе теперь ${apples} яблок!`);

// const operator = prompt('Введите оператор');
// console.log(operator);

// const value1 = parseInt(prompt('Введите первое число'));
// console.log(value1);

// const value2 = parseInt(prompt('Введите второе число'));
// console.log(value2);

// let result = 'error';

// switch (operator) {
//     case '+':
//         result = value1 + value2;
//         break;
//     case '-':
//         result = value1 - value2;
//         break;
//     case '*':
//         result = value1 * value2;
//         break;
//     case '/':
//         result = value1 / value2;
//         break;
// }

// alert(`Ответ: ${result}`);

//SWITCH
// const stars = 5;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого количества звезд нет');
// }

// console.log(price);

// const stars = 4;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого количества звезд нет');
// }

// console.log(price);

// const option = 3;
// let message;

// switch (option) {
//     case 1:
//         message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//         break;
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'Послыка будет отправлена сегодня';
//         break;
//     default:
//         'Вам перезвонит менеджер';
// }

// console.log(message);

//циклы
// FOR
// for (let i = 0; i >= -500; i -= 10) {
//     console.log(i);
// }

// console.log('qewew');
// EXERCISES
// const employees = 10;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работинка номер ${i} - ${salary}`);
//     totalSalary += salary;
// }
// console.log('totalSalary:', totalSalary);

// const min = 6;
// const max = 15;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log('четное: ', i);
//     total += i;
// }

// console.log('total:', total);
// EXERCISES
// let balance = 10000;
// const payment = 200;
// console.log(
//     `Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету`
// );

// if (balance >= payment) {
//     console.log('ok');

//     balance -= payment;

//     console.log(`На счету осталось ${balance} кредитов`);
//     console.log('Все хорошо, снимаем деньги. Спасибо за покупку!');
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена');

// EXERCISES
// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 500 && totalSpent < 2000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 2000 && totalSpent < 5000) {
//     console.log('Серябрянный  партнер, скидка 5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('Золотой  партнер, скидка 10%');
//     discount = 0.1;
// } else {
//     console.log('У вас нет партнерской скидки');
//     const name = 'dsdsdsds';
// }

// payment = payment - payment * discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);

// EXERCISES
