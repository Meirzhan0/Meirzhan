// 3.13. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами 
// (через substr, substring, slice).

let str = 'aaa bbb ccc'
console.log(`with slice string '${str.slice(4, 7)}'`)
console.log(`with substring string '${str.substring(4, 7)}'`)
console.log(`with substr string '${str.substr(4, 3)}'`)