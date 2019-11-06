// 1.07. Напишите программу, которая в консоли выводит текстовое поздравление. 
// Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday dear {{username}}
// Например Happy birthday dear Maxim

let listName = [
    'Alexandr',
    'Irina',
    'mr This',
    'It',
    'EnyOne',
    'EnyThing',
]

let userName = listName[Math.floor(Math.random() * 7)]

console.log(`Happy birthday dear ${userName}`)