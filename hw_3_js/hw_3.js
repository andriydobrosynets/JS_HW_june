// - створити функцію яка обчислює та повертає площу прямокутника висотою

/*function square (a,b){
    let s=a*b
    return s;
}
console.log(square(4,6))*/

// - створити функцію яка обчислює та повертає площу кола
/*function kolo (r,pi=3.14) {
   z = Math.pow(r,2)*pi
    return z;

}
console.log(kolo(4))*/


// - створити функцію яка обчислює та повертає площу циліндру
/*function cylinder(r,h,pi=3.14) {
    Sbich=2*pi*r*h
    Socn=Math.pow(r,2)*pi
    S=Sbich+2*Socn
    return S
}
console.log(cylinder(5,2))*/


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
/*function number(){
    let min = arguments[0]
    let max = arguments[0]
    for (const numberElement of arguments) {
        if (numberElement > max) max = numberElement
        if (numberElement < min) max = numberElement
    }
    console.log("max ",max)
    return min
}
const min = number(2,3,4,5,6,7,8)
console.log("min ",min)*/



// створити функцію яка  створює блок з текстом. Текст задати через аргумент
/*function divText (text,text1) {
    arguments[0] = 'OKTENWEB'
    arguments[1] = 'Школа програмування'
    document.write(`
        <div>
            <h1>
                ${arguments[0]}
            </h1>
            <h3>
                ${arguments[1]}
            </h3>
        </div>
    `)
}
divText()*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
/*function divText () {
    arguments[0] = 'OKTENWEB'
    document.write(`
        <ul>
            <li>${arguments[0]}</li>
            <li>${arguments[0]}</li>
            <li>${arguments[0]}</li>
        </ul>
    `)
}
divText()*/




// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*
function divText (text,n) {
    arguments[0]="OKTENWEB"

    for (let i = 0; i < n; i++) {
        const nElement = n[i];
        document.write(`
        <ul>
            <li>${arguments[0]}</li>
        </ul>
    `)
    }

}
divText('',15)
*/



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = ['okten',10,true,'andriy','shool',-75]
function arrayElement (array) {
    array = ['okten',10,true,'andriy','shool',-75]
    for (let i = 0; i <array.length; i++) {
        const nElement = array[i];
        document.write(`
        <ul>
            <li>${array[i]}</li>
        </ul>
    `)
    }
}

arrayElement()


