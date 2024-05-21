// const arr = [];
// const obj = {};

// arr[0] = 'hello';
// arr[1] = 'world';
// arr.hi = 'elbrus';

// obj[0] = 'hello';
// obj[1] = 'world';
// obj.hi = 'elbrus';

// console.log(arr, obj);

// array = ['h', 'e', 'l', 'l', 'o']
// 0 -- 'h'
// 1 -- 'e'
// 2 -- 'l'
// 3 -- 'l'
// 4 -- 'o'
// object = { key1: 'value1', key2: 'value2' }
// key1 -> #fca726bc -> 'value1'
// key2 -> #003726ca -> 'value2'

// const arr = [];
// arr[3] = 'l';
// arr[1] = 'e';
// arr[0] = 'h';
// arr[4] = 'o';
// arr[2] = 'l';
// arr.forEach((e) => console.log(e));

// const obj = {};
// obj[3] = 'l';
// obj[1] = 'e';
// obj[0] = 'h';
// obj[4] = 'o';
// obj[2] = 'l';

// console.log(Object.keys(obj));

// for (const key in obj) {
//   console.log(obj[key]);
// }

const names = [
  'Alex',
  'Bob',
  'Charlie',
  'Dave',
  'Eve',
  'Fred',
];

// Мутирующие методы -- push, pop, shift, unshift

// const res = names.push('Garry');
// console.log(res);
// const res = names.pop();
// console.log(res);
// names.pop();
// console.log(names);
// names.split(',')

// split/join separators: \n | \r\n | os.EOL
// const os = require('os');
// console.log(names.join(os.EOL)); -- split/join не мутируют

// const res = names.slice(2, 4); // slice не мутирует
// console.log(res, names);

// const res = names.slice(2).slice(0, 3).slice(1, 2);
// console.log(res);

// const res = names.splice(2, 2, ['Pavel', 'Igor', 'Irma']);
// console.log({ res, names });

// function removeName(name) {
//   const targetIndex = names.indexOf(name); // ===
//   if (targetIndex === -1) return;
//   names.splice(targetIndex, 1);
// }
// console.log(names);
// removeName('Bob');
// console.log(names);

// const res = names.concat('Sergey');
// console.log({ res, names });

// const res = names.reverse(); // мутирует
// const res = names.toReversed(); // не мутирует
// console.log({ res, names });

// function checkLength(element) {
//   if (element.length >= 6) return true;
//   return false;
// }

// const res1 = names.some(checkLength);
// const res2 = names.every(checkLength);
// console.log({ res1, res2 });

// const res = names.filter((element) => {
//   if (element.length >= 4) return true;
//   return false;
// });
// const res = names
//   .filter((element) => element.length >= 4)
//   .filter((name) => name.at(-1) === 'e')
//   .toReversed();
// console.log({ res, names });

const people = names.map((name, ind) => {
  return {
    name,
    age: Math.floor(Math.random() * 30) + 18,
    asleep: ind % 2 === 0,
  };
});
// console.log(people);
const totalAge = people.reduce(
  (acc, person) => acc + person.age,
  0,
);
// console.log(totalAge)

// const res = names.reduce((acc, name) => {
//   if (name.length in acc) {
//     acc[name.length].push(name);
//     // acc[name.length] = acc[name.length].concat(name);
//     return acc;
//   }
//   acc[name.length] = [name];
//   return acc;
// }, {});
// console.log({ names, res });

const bobIndex = people.findIndex(
  (person) => person.name === 'Bob',
);
// console.log(bobIndex);

// myFindIndex

function myFindIndex(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callback(element)) {
      return index;
    }
  }
  return -1;
}

// console.log(
//   myFindIndex(people, (el) => el.name === 'Charlie'),
// );

// filter, map, find, findIndex, reduce, forEach -- все методы
// перебирают массив поэлементно
// filter -- убрать элементы
// map -- преобразовать элементы
// reduce -- получить "выжимку" из массива
// forEach -- для совершения side-эффектов
// users.forEach((user) => user.renderNewMessage(msg))

// Копирование массива - поверхностное
// const namesCopy = [...names];
// const namesCopy = names.map((el) => el);
// const namesCopy = names.slice();
// names[1] = 'НЕ БОБ';
// console.log({ names, namesCopy });

// Глубокое копирование
// const peopleCopy = structuredClone(people);
const peopleCopy = JSON.parse(JSON.stringify(people));
people[1].name = 'НЕ БОБ';
console.log({ people, peopleCopy });
