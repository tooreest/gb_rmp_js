/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/


function checkPrimeNumber(num) {
    if (num == 1) {return false;}
    if (num == 2) {return true;}
    if (num % 2 == 0) { return false; }
    else {
        let to = num / 2;
        for (let i = 3; i < to; i += 2) {
            if (num % i == 0) { return false; }
            to = num / i;
        }
        return true;
    }
}


let n = 100;

document.writeln('<h3>Задание 1.</h3>');
document.writeln('Простые числа от 1 до ', n, ' - <br>');

let i = 1;
while (i <= n) {
    if (checkPrimeNumber(i)) {
        document.writeln(i, ',');
        console.log(i);
    }
    i++;
}
