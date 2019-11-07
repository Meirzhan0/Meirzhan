// 3.08. Дан массив с числами. Числа могут быть положительными и отрицательными. 
// Найдите сумму положительных элементов массива.


function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let arr = []
let summ = 0

console.log('исходный массив')
for (let index = 0; index < 10; index++) {
    arr[index] = randomInt(-100, 100)
    console.log(`arr[${index}] = ${arr[index]}`)
    summ += arr[index] > 0 ? arr[index] : 0
}

console.log(`\nsumm positives number = ${summ}`)

