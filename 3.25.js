// 3.25. Напишите функция, которая принимает аргументом строку 
// и возврашает нам строку преобразуя первую букву строки в верхний регистр.

function upperFirstChar(str) {
    return str.replace(/^./, firstChar => firstChar.toUpperCase())
}

alert(upperFirstChar(prompt('Пользователь! )) \n напиши что-нибудь', 'что-нибудь')))