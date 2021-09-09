console.log('Задание 1');

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/gi, '!'));

console.log('Задание 2');

let data = '2025-12-31';
data = data.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1')
console.log(data.replace(/-/gi, '/'));

console.log('Задание 3');

let str_3 = 'Я учу javascript!';

//способ 1 - substr
console.log(str_3.substr(0,2) + str_3.substr(6));

//способ 2 - substring
console.log(str_3.substring(0,2) + str_3.substring(6));

//способ 3 - slice
console.log(str_3.slice(0,2) + str_3.slice(6));

console.log('Задание 4');

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for(let i = 0; i < arr.length; i++){
  sum+=Math.pow((arr[i]), 3);
}

console.log(Math.sqrt(sum));

console.log('Задание 5');

let a = 6,
    b = 1;

// let a = 3,
//     b = 5;

let c = Math.abs(a - b);
console.log(c);

console.log('Задание 6');

let date = new Date();

function add(num){
  if (num > 0 && num < 10){
    return '0' + num;
  } else return num;
}

console.log(add(date.getHours()) + ':' + add(date.getMinutes()) + ':' + add(date.getSeconds()) + ' ' + add(date.getDate()) + '.' + add(date.getMonth()) + '.' + add(date.getSeconds()));

console.log('Задание 7');

let str_ab = 'aa aba abba abbba abca abea';
console.log(str_ab.match(/a{1}b*a{1}/gi));

console.log('Задание 8');

let phoneNumber = '+375297586527';
console.log(/^\+(375|80)(17|29|33|44)[0-9]{7}$/gm.test(phoneNumber));

console.log('Задание 9');

let email = 'masha.parkhomovich.03@mail.ru';

console.log(/[a-zA-z]{1}[a-zA-Z0-9.-_]{2,}@[a-zA-Z]{2,11}.[a-zA-Z]{2,11}/gm.test(email));

console.log('Задание 10');

function validation(domen){

  const reg = new RegExp(/(^(https):\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+\.(by|com|ru|org))(\/[A-Za-z0-9\/-]+\/)(\?[A-Za-z0-9\/_=&]+)([#A-Za-z0-9]+)/gm)
  
  console.log(reg.exec(domen));
}

validation('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');