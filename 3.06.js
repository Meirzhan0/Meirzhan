// 3.06. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

let obj = {green: 'зеленый', 
           red: 'красный', 
           blue: 'голубой'}

for (const color in obj) {
    console.log(`${color}: '${obj[color]}'`)
}