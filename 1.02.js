// 1.02. Создайте три переменные с любыми числовыми значениями. 
// Используя условный оператор и не используя логические, 
// найдите минимальное число и отобразите на экране имя переменной и ее значение. 

let min = -100
let max = 100 

let val_one = Math.floor(Math.random() * (max - min + 1) + min)
let val_two = Math.floor(Math.random() * (max - min + 1) + min)
let val_three = Math.floor(Math.random() * (max - min + 1) + min)

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