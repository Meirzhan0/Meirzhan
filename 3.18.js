// 3.18. Дана строка 'я учу javascript!'. 
// Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice)

let str = 'я учу javascript!'

console.log(`cut with slice string '${str.slice(2, 5)}' '${str.slice(6)}'`)
console.log(`cut with substring string '${str.substring(2, 5)}' '${str.substring(6)}'`)
console.log(`cut with substr string '${str.substr(2, 3)}' '${str.substr(6)}'`)