// 3.34. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
//
//  "1x1=1; 2x1=1"
//  "1x2=2; 2x2=4"
//
// И выходим и останавливаем цикл, когда будет 6 умножнить на 6

let arr = new Array(6).fill('').map( () => Array(6).fill(''))


for (let indexI = 0; indexI < 6; indexI++) {
    for (let indexJ = 0; indexJ < 6; indexJ++) {
        arr[indexI][indexJ] = `${indexJ+1}x${indexI+1}=${(indexI+1)*(indexJ+1)};`;   
    }
}

console.log(arr)