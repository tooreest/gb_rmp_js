/*
Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/


alert('*** Выполняется Задание №4 ***')
let num = Math.floor(Math.random()*15)
alert(typeof(num) + ' --> ' + num)

switch(num) {
	 case 0: alert(num++)
	 case 1: alert(num++);
	 case 2: alert(num++);
	 case 3: alert(num++);
	 case 4: alert(num++);
	 case 5: alert(num++);
	 case 6: alert(num++);
	 case 7: alert(num++);
	 case 8: alert(num++);
	 case 9: alert(num++);
	 case 10: alert(num++);
	 case 11: alert(num++);
	 case 12: alert(num++);
	 case 13: alert(num++);
	 case 14: alert(num++);
	 case 15: alert(num++);
}
