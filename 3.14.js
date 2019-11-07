// 3.14. В переменной date лежит дата в формате '2025-12-31'. 
// Преобразуйте эту дату в формат '31/12/2025'.

let startDate = '2025-12-31'
let resultDate = startDate.slice(8,10) + '/' + startDate.slice(5,7) + '/' + startDate.slice(0,4)
console.log(resultDate)