/*
*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

*/


let num = 1;
let to = 20;
let str = 'x';

document.writeln('<h3><br>Задание 4.</h3>');
while (num <= to) {
    document.writeln(str.repeat(num), '<br>');
    console.log(str.repeat(num));
    num++;
}
