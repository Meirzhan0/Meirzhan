// 3.26. Напишите функция, которая принимает аргументом строку 
// и возврашает нам строку преобразуя последнюю букву строки в верхний регистр.

function upperLastChar(str) {
    return str.replace(/.$/, lastChar => lastChar.toUpperCase())
}

alert(upperLastChar(prompt('Пользователь! )) \n напиши что-нибудь', 'что-нибудь')))