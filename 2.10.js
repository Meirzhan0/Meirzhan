// 2.10. Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

let number

while (number == NaN || number == undefined) {
    number = Number(prompt('пользователь введи число'))
}

alert(`квадрат числа ${number} это ${number * number}`)