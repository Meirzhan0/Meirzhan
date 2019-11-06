// 1.06. Напишите цикл с шагом 1, в теле которого распечатываются квадраты 
// каждого четного значения счетчика
min = 10
max = 30

let maxFor = Math.floor(Math.random() * (max - min + 1) + min)

console.log('maxFor = ' + maxFor)

for (i = 1; i < maxFor; i++) {
    (i % 2 == 0) ? console.log(i*i) : null
}