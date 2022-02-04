/*
*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/


alert('*** Выполняется Задание №8 ***')
function power(val, pow) {
    if (pow == 1) return val;
    pow--
    return val * power(val, pow) 
}

alert(power(2, 10))
