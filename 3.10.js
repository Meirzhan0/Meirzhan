// 3.10. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = [10, 20, 30, 50, 235, 3000]
let numToStr = ''
for (let index = 0; index < arr.length; index++) {
    numToStr = arr[index].toString()
    '125'.indexOf(numToStr[0]) != -1 ? console.log(arr[index]) : null
}