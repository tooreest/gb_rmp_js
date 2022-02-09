/*
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/


let cart = [
    ['goodName', 'googQuantity', 'goodPrice'],
    ['Яблоки', 3, 100],
    ['Ананас', 2, 200],
    ['Картофель', 5, 50]
];

function countBasketPrice(cart) {
    let cost = 0;
    for (let i = 1; i < cart.length; i++) {
        cost = cost + cart[i][1] * cart[i][2];
    }
    return cost;
}

fullCost = countBasketPrice(cart);

document.writeln('<h3>Задание 2.</h3>');
document.writeln('Товары в корзине<br>', cart.slice(1), '<br>');
document.writeln('Стоимость всех товаров - ', fullCost, 'р.');
console.log(countBasketPrice(cart));
