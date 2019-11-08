// 3.33. Задание на МС МК: Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
// Разбейте ее на массив слов, и переставьте слова в правильном порядке 
// с помощью любых методов массива (indexOf, splice ...). 
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

//        'Как звонарь Жак однажды сломал головой фонарь'
let str = 'Как однажды Жак звонарь сломал фонарь головой'
let arr = str.split(' ')

function permutation(oneWord, twoWord, arrIn) {
    if (arrIn.indexOf(oneWord) > arrIn.indexOf(twoWord)) {
        arrIn.splice(arrIn.indexOf(oneWord), 1, twoWord)
        arrIn.splice(arrIn.indexOf(twoWord), 1, oneWord)
    } else {
        arrIn.splice(arrIn.indexOf(twoWord), 1, oneWord)
        arrIn.splice(arrIn.indexOf(oneWord), 1, twoWord)
    }
    return arrIn
}

arr = permutation('головой', 'фонарь', permutation('звонарь', 'однажды', arr))

let newStr = arr.join(' ')

console.log(`${str}\n${newStr}`)
