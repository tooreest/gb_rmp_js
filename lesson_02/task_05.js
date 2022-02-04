/*
Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/


alert('*** Выполняется Задание №5 ***')
function summ(v1, v2) {
	 return v1 + v2;
}

function diff(v1, v2) {
	 return v1 - v2;
}

function prod(v1, v2) {
	 return v1 * v2;
}

function divis(v1, v2) {
	 return v1 / v2;
}

let var1 = +prompt('Введите первую переменную');
let var2 = +prompt('Введите вторую переменную');
let act = prompt('Введите действие:\n+ - * /');

switch(act) {
    case '+': alert(summ(var1, var2)); break;
    case '-': alert(diff(var1, var2)); break;
    case '*': alert(prod(var1, var2)); break;
    case '/': alert(divis(var1, var2)); break;
}
