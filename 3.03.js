// 3.03.  Дан массив с элементами `[2, 3, 4, 5]`. 
// С помощью цикла `for` найдите произведение элементов этого массива. 
// Через `for of`

let arr = [2, 3, 4, 5]
let multiplication = 1

for (const item of arr) {
    multiplication *= item    
}

console.log(multiplication)