// 3.27. Напишите функция, которая принимает аргументом строку 
// и преобразуйте например 'var_test_text' в 'varTestText'. 
// Функция, конечно же, должен работать с любыми аналогичными строками.

function changeToCamelCase(str) {
    return str.replace(/_(.)/g, (found, toUp) => toUp.toUpperCase())
}

alert(changeToCamelCase(prompt('Пользователь! )) \n напиши что-нибудь в snake_case', 'var_test_text')))