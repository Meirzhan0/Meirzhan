// 3.14. В переменной date лежит дата в формате '2025-12-31'. 
// Преобразуйте эту дату в формат '31/12/2025'.

let str = '2025-12-31'

console.log(str.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1'))