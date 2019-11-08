// 3.29. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
// Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, 
// не используя функцию Math.pow().

//случайное число в диапазоне от min до max с точность 2 знака после запятой 
function getRndFloatInRange(digitPastDot, max, min=0) {
    let ranc = 10**digitPastDot
    let getRndIntInRange = (maxInt, minInt=0) => Math.floor(Math.random() * (maxInt - minInt + 1) + minInt) 

    return (getRndIntInRange(max*ranc, min*ranc)/ranc).toFixed(digitPastDot)
}

let n = 10
let arr = new Array(n).fill(0)
    .map( () => getRndFloatInRange(2, 100, -100))
    .map( (val, item) => console.log(`элемент массива [${item}] = ${val} в степени 5: ${val**5}`))



