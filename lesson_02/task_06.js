/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/


alert('*** Выполняется Задание №6 ***')
function calc(v1, v2, action) {
	 switch(action) {
	 	case '+': return v1 + v2;
	 	case '-': return v1 - v2;
	 	case '*': return v1 * v2;
	 	case '/': return v1 / v2;
	 }
}


let var1 = +prompt('Введите первую переменную');
let var2 = +prompt('Введите вторую переменную');
let act = prompt('Введите действие:\n+ - * /');

alert(calc(var1, var2, act));
