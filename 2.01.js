// 2.01. Напишите код вычисления суммы всех нечетных чисел от 0 до заданного числа N
// - Спрашиваем у пользователя через prompt
// - Переводим в number(потому что из prompt мы получаем строку)
// - Дальше думаем сами
// В конце просто я должен увидеть сумму от 0 до N числа, который я ввёл

let number = null
let summ = 0

while (number == NaN || number == null) {
    number = Number(prompt('введите целое число'))
}

for (let addend = 0; 
    number > 0 ? addend <= number : addend >= number;
    number > 0 ? addend++ : addend--) {
        summ += addend % 2 != 0 ? addend : 0
    }

alert(summ)