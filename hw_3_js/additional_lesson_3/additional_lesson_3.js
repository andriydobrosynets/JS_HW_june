// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

/*let array1 =  [1,2,3,4,554]
let array2 =  [2,3,4,5,65]

function newArray (array1, array2){
    let arr = array1.map((value , index, array) => {
        return array[index] = array2[index] + value
        })
    return arr
}
console.log(newArray(array1, array2))*/



// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

/*let array =['a', 'b', 'c']
function push(x) {
    for (i=1;i<=3;i++){
        array.push(i)
    }
    console.log(array)
}
push(array)*/



// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

/*let array =  [1,2,3]
let newArray =[]
function revers(x){
    for (i=array.length-1;i>=0;i--){
    newArray.push(array[i])

    }
    console.log(newArray)
}
revers(newArray)*/


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

/*let array =[1, 2, 3]
function addArray(a,b,c) {
    array.push(a,b,c)
    console.log(array)

}
addArray(4,5,6)*/

/*let array =[1, 2, 3]
function addArray(x) {
    for (let i=4;i<=6;i++) {
    array.push(i)
    }
    console.log(array)

}
addArray(array)*/


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

/*let array =[1, 2, 3]
function addArray(x) {
    for (let i=6;i>=4;i--) {
    array.unshift(i)
    }
    console.log(array)

}
addArray(array)*/

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].


/*let array =[1, 2, 3, 4, 5]
function addArray(x) {
        let s = array.slice(3,5)
        console.log(s)
}
addArray(array)*/


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].


/*let array =[1, 2, 3, 4, 5]
function addArray(x) {
    let s = array.slice(0,2)
    console.log(s)
}
addArray(array)*/


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].


/*let array =[1, 2, 3, 4, 5]
function addArray(x) {
    let s = array.slice(0,3)
    s.push('a','b','c')
    console.log(s)
}
addArray(array)*/



// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
/*let array =[1, 20, 3, 4, 5, 23, 40, 78, 90,13]
function number(x) {
    for (const a of x) {
        if (a % 2 == 0){
            console.log(a)
        }
    }
}
number(array)*/


/*let array =[1, 20, 4, 5, 40, 78, 90,765,9088]
let newArray = []
function number(x) {
    for (let i=0;i<array.length;i++) {
        if (array[i] % 2 == 0){
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}
number(newArray)*/

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


/*let array =[1, 20, 4, 5, 40, 78, 90,765,9088,12]
let newArray = []
function number(x) {
    for (let i=0;i<array.length;i++) {
            newArray.push(array[i])
    }
    console.log(newArray)
}
number(newArray)*/



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

/*let array = [ 'a', 'b', 'c']
for (i=0;i<1;i++){
    let s = array.join('')
    console.log(s)
}*/

/*let array = [ 'a', 'b', 'c']
let result = ''
for (let i=0; i<3; i++) {
    result +=array[i]
}
console.log(result)*/



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.


/*let array = [ 'a', 'b', 'c']
i=0
while (i<1){
    let s = array.join('')
    console.log(s)
    i++

}*/



// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


/*let array = [ 'a', 'b', 'c']
function string(x) {
    for (const string of array) {
    let s = array.join('')
    console.log(s)
    break
}
}
string(array)*/

/*let array = [ 'a', 'b', 'c']
let result = ''
for (const string of array) {
    result +=string
}
console.log(result)*/


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]