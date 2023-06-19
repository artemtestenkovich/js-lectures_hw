
//update text
Домашка:

// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

    let hamburger = 10;
    let potato = 10;

    if(hamburger >= 4 && potato > 1){
    console.log('всі поїли')
    } else{
        console.log('Не всі поїли')
}


// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price_item = 2000;

if(price_item < 1000){
    console.log('Less than 1000')
} else if (price_item > 1900) {
    console.log('More than 1900')
} else {
    console.log('ok')
}


// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

//first

let price_item2= 100;

if(price_item2 <= 1000) {
    console.log('price2 not in range')
}
else{
    if(price_item2 >= 1900)
    console.log('price2 not in range')

}

//second

let price_item3= 100;

if(price_item3 >=! 1000) {
    console.log('price2 not in range')
}
else{
    if(price_item3 <=! 1900)
    console.log('price2 not in range')

}


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let season=2;


if(season == 1){
    console.log('winter is here')
} else if (season ==2 ) {
    console.log('spring is here')
} 
else if (season ==3 ) {
    console.log('summer is here')
}
else if (season ==4) {
    console.log('autumn is here')
}




// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.


let a = 400;
let b = 200;
let c = 300;

if(a < b && a < c){
    console.log('a is avarage value')
} else if (b < a && b < c ) {
    console.log('b is avarage value')
} 
else if (c < a && c < b ) {
    console.log('c is avarage value')
}



// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let daynum = 5;

switch(daynum){
    case 1:
        console.log('Day is Monday');
        break;
    case 2:
        console.log('Day is Tuesday');
        break;
    case 3:
        console.log('Day is Wednesday');
        break;
    case 4:
        console.log('Day is Thursday');
        break;
    case 5:
        console.log('Day is Friday');
        break;
    case 6:
        console.log('Day is Saturday');
        break;
    case 7:
        console.log('Day is Sunday');
        break;
}



// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let oper=1;
let x = 5;
let y= 10;


switch (oper) {
    case 1:
    res = x + y;
    console.log("\nResult is :" + res)
    break

    case 2:
    res = x - y
    console.log("\nResult is :" + res)
    break

    case 3:
    res = x * y
    console.log("\nResult is :" + res)
    break

    case 4:
    res = x / y
    console.log("\nResult is :" + res)
    break
};

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.


let test_string = 'Tommorow'
const string_no_vowels = test_string.replace(/[aeiou]/gi, '');
console.log(string_no_vowels)


// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

let meterval1=30;
if(meterval1 > 0){
            const kmval1 = meterval1/1000;
            console.log(meterval1 + "m is " + kmval1 + " km ")
        } 
        else{
            console.log("Value must be >0.Please provide another value")
        
        }


