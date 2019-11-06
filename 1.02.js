// 1.02. Создайте три переменные с любыми числовыми значениями. 
// Используя условный оператор и не используя логические, 
// найдите минимальное число и отобразите на экране имя переменной и ее значение. 


function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let val_one = randomInt(-100, 100)
let val_two = randomInt(-100, 100)
let val_three = randomInt(-100, 100)

console.log(
    'val_one = ' + val_one + '\n' +
    'val_two = ' + val_two + '\n' +
    'val_three = ' + val_three + '\n'
)

if (val_one < val_two) {
    if (val_one < val_three){
        console.log('minimum val_one = ' + val_one)
    } else {
        console.log('minimum val_three = ' + val_three)
    }
} else {
    if (val_two < val_three) {
        console.log('minimum val_two = ' + val_two)
    } else {
        console.log('minimum val_three = ' + val_three)
    }
}