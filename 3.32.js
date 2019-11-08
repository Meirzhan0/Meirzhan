// 3.32. Задание на МС.  Напишите объект, описывающий модель телефона, 
// заполнив все свойства значениями, прочитанными из prompt 
// (например: brand, model, resolution, color...).

let arr = ['brand', 'model', 'resolution', 'color', 'batteryWeight', 'system']
let obj = {}

arr.forEach( val => obj[val] = prompt(`Введите ${val} телефона`))

console.log(obj)