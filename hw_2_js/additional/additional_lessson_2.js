//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:


 // 1. перебрати його циклом while
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let n = 0
// while (a < array.length) {
//     console.log(array[a])
//     n++
// }
//
//
// // 2. перебрати його циклом for
// for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i])
// }
//
//
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let n = 0
// while (n < array1.length) {
//     if (array1[n] % 2 !== 0) {
//         console.log(array1[n])
//     }
//     n++
// }
//
//
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 2 !== 0) {
//         console.log(array1[i])
//     }
// }
//
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let n = 0
// while (n < array1.length) {
//     if (array1[n] % 2 === 0) {
//         console.log(array1[n]);
//     }
//     n++
// }
//
//
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 2 === 0) {
//         console.log(array1[i])
//     }
// }
//
//
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 3 === 0) {
//         array1[i] = 'okten'
//     }
// }
// console.log(array1)
//
//
// // 8. вивести масив в зворотньому порядку.
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//
//     array2[i] = array1[array1.length - 1 - i]
//
// }
// console.log(array2)
//
//
// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// // 1. перебрати його циклом while
// let n = array1.length - 1
// while (n > -1) {
//     console.log(array1[n])
//     n--
// }
// // 2. перебрати його циклом for
// for (let i = array1.length - 1; i > -1; i--) {
//     console.log(array1[i])
// }
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let n = array1.length;
// while (n > -1) {
//     if (array1[n] % 2 !== 0) {
//         console.log(array1[n])
//     }
//     n--
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = array1.length - 1; i > -1; i--) {
//     if (array1[i] % 2 !== 0) {
//         console.log(array1[i])
//     }
// }
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let n = array1.length - 1
// while (n > -1) {
//     if (array1[n] % 2 === 0) {
//         console.log(array1[n])
//     }
//     n--
// }
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = array1.length - 1; i > -1; i--) {
//     if (array1[i] % 2 === 0) {
//         console.log(array1[i])
//     }
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = array1.length - 1; i > -1; i--) {
//     if (array1[i] % 3 === 0) {
//         array1[i] = 'okten'
//     }
// }
// console.log(array1)

//------------------------------------------------------------------------------------------------
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//let array = []
// for (let i = 1; i < 102; i++) {
//     if (i % 2 === 0) {
//         array.push(i)
//     }
// }
// console.log(array)


//     b. заповнити його 50 непарними числами за допомоги циклу.\
// let array = []
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 1) {
//         array.push(i)
//     }
// }
// console.log(array)


// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
/*
let array = []
for (i=0;i<20;i++){
    a=Math.round(Math.random()*100)
    array.push(a)

}
console.log(array)
*/



// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
/*let array = []
let min=8
let max=732
for (i=0;i<20;i++){
    a=Math.round(Math.random()*(max-min)+min)
    array.push(a)
}
console.log(array)*/
// 2. Вивести за допомогою console.log кожен третій елемен

/*let array = []
let min=8
let max=732
for (i=0;i<20;i++){
    a=Math.round(Math.random()*(max-min)+min)
    array.push(a)
}
console.log(array)
for (i=2;i<array.length;i+=3) {
        console.log(array[i])
}*/



// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

/*let array = []
let min=8
let max=732
for (i=0;i<20;i++){
    a=Math.round(Math.random()*(max-min)+min)
    array.push(a)
}
console.log(array)
for (i=2;i<array.length;i+=3) {
    if(array[i]%2===0){
        console.log(array[i]);
    }
}*/




// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
/*let array = []
let newArray=[]
let min=8
let max=732
for (i=0;i<20;i++){
    a=Math.round(Math.random()*(max-min)+min)
    array.push(a)
}
console.log(array)
for (i=2;i<array.length;i+=3) {
    if(array[i]%2===0){
        newArray.push(array[i])
    }
}
console.log(newArray)*/

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56





// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

/*let array=[100,250,50,168,120,345,188]
let suma=0
for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
        suma += array[i]/array.length
    }
    console.log(suma)*/



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

/*let array = []
let newArray=[]
for (i=0;i<5;i++){
    a=Math.round(Math.random()*100)
    array.push(a)
    b=a*5
    newArray.push(b)
}
console.log(array)
console.log(newArray)*/



// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

/*let array = [43,54,'olga',7,true,'natalia']
let newArray = []
for (let arrayElement of array) {
    if (typeof arrayElement == 'boolean'){
        newArray.push(arrayElement)
    }
}
console.log(newArray)*/



/*let array = [43,54,'olga',7,true,'natalia']
let newArray = []
for (let i=0; i<array.length;i++) {
    if (typeof array[i] == 'number'){
        newArray.push(array[i])
    }
}
console.log(newArray)*/


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]