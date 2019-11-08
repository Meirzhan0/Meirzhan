// 3.28. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.


function createRandomArray(arrayLength=10) {
    let lowerAlphabet = new Array(26).fill('').map((val, index) => String.fromCharCode(97 + index)) // массив a-z
    let digits = new Array(10).fill(0).map((val, index) => index.toString()) // массив 0-9
    let arrForRandom = [].concat(lowerAlphabet, digits, digits, digits) // массив a-z 0-9 0-9 0-9

    //случайное целое число в диапазоне min max
    let getRndIntInRange = (max, min=0) => Math.floor(Math.random() * (max - min + 1) + min) 

    //случайный элемент массива
    function getRndElemFromArr(arr) {
        let elem = arr[getRndIntInRange(arr.length - 1)]
        if (isNaN(elem)) {
            return elem
        } else {

            // если elem число случайным образом возвращает его строкой или числом
            return getRndIntInRange(1) ? Number(elem) : elem  
        }
    }
    
    return new Array(arrayLength).fill('').map( () => getRndElemFromArr(arrForRandom))
}


let arr = createRandomArray() //собственное ради чего все что выше ))
let summ = 0

arr.map( (val) => !isNaN(val) ? summ += parseInt(val): val )

console.log('созданный массив: \n', arr, `\nсумма чисел массива: ${summ}`)
