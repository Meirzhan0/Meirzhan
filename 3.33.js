// 3.33. Задание на МС МК: Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
// Разбейте ее на массив слов, и переставьте слова в правильном порядке 
// с помощью любых методов массива (indexOf, splice ...). 
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

//        'Как однажды Жак звонарь головой сломал фонарь'  
let str = 'Как однажды Жак звонарь сломал фонарь головой'
let arr = str.split(' ')

arr.splice(arr.indexOf('сломал'), 0, arr.splice(arr.indexOf('головой'), 1).toString())

alert(`${str}\n${arr.join(' ')}`)
