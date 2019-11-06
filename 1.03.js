// 1.03. В переменную age запишите возраст человека. 
// Если значение больше или равно 20 и меньше 27, через console.warn выводится "Выслать повестку".

let min = 1
let max = 100 

let age = Math.floor(Math.random() * (max - min + 1) + min)

console.log('age = ' + age)

if (age >= 20 && age < 27) { 
    console.warn("Выслать повестку") 
}