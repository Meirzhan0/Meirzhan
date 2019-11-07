// 2.08. Создайте переменную str и присвойте ей значение 'Привет, Мир!'. 
// Выведите сумму всех charCode этой переменной

let str = 'Привет, Мир!'
let summ = 0

for (char = 0; char < str.length; char++ ){
    summ += str.charCodeAt(char)
}

alert(summ)