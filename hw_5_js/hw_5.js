//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

/*let text = document.getElementById('content')
console.log(text)*/

/*let text = document.getElementsByClassName('rule2')
for (const textElement of text) {
    console.log(textElement)
}*/


/*let text = document.getElementsByTagName('li')
for (const textElement of text) {
    console.log(textElement)
}*/


// -- отримує текст з блоку з id "rules"

// let text = document.getElementById('rules')
// console.log(text)

// -- замініть текст параграфа з id 'content' на будь-який інший

/*let text = document.getElementById('content')
 text.innerHTML = '<h1>Византи́я, Византи́йская импе́рия, Восто́чно-Ри́мская импе́рия, Восто́чная Ри́мская импе́рия, Греческая империя, самоназвание Держава Ромеев, Ромейская империя (395[~ 2]—1453) — государство, сформировавшееся в 395 году вследствие раздела Римской империи на западную и восточную части после смерти императора Феодосия I.</h1>'*/

/*let text = document.getElementById('content')
text.innerText = 'Византи́я, Византи́йская импе́рия, Восто́чно-Ри́мская импе́рия, Восто́чная Ри́мская импе́рия, Греческая империя, самоназвание Держава Ромеев, Ромейская империя (395[~ 2]—1453) — государство, сформировавшееся в 395 году вследствие раздела Римской империи на западную и восточную части после смерти императора Феодосия I.'*/

// -- замініть текст параграфа з id 'rules' на будь-який інший

/*let text = document.getElementById('rules')
text.innerText='В V веке Западная Римская империя прекратила своё существование, оставив Византию единственной исторической, культурной и цивилизационной частью, оставшейся от Древнего Рима и просуществовавшей на протяжении почти тысячелетия истории Поздней Античности и Средневековья'*/

// -- змініть кожному елементу колір фону на червоний

/*let color = document.getElementsByTagName('body')

for (const colorElement of color) {
    colorElement.style.backgroundColor='red'
}*/


// -- змініть кожному елементу колір тексту на синій

/*let color = document.getElementsByTagName('body')

for (const colorElement of color) {
    colorElement.style.color='blue'
}*/


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

/*let pes = document.getElementById('rules')
console.log(pes.classList)*/


// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний текст

//----------------------------------------------------НЕ ЗВЕРТАТИ УВАГИ---------------------------------------------
// let classElement = document.getElementById('content')
// /*for (const element of classElement) {
//     console.log(element)
// }*/
// classElement.onclick=function (){
//     // classElement.innerText='red'
// console.log('dsd')
// }
//-------------------------------------------------------------------------------------------------------------------


// let classElement = document.getElementsByClassName('fc_rules')
// for (const element of classElement) {
//     element.onclick = function () {
//                 console.log(element)
//
//         for (const element1 of classElement) {
//             element1.onclick = function () {
//                 console.log('Довільний текст')
//
//             }
//             break
//         }
//
//     }
//
// }

let classElement = document.getElementsByClassName('fc_rules')
for (const element of classElement) {
    element.onclick = function () {
        console.log(element.innerText)

        element.onclick = function () {
            console.log('Довільний текст')

        }


    }

}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
/*
let color = document.getElementsByClassName('fc_rules')
for (const colorElement of color) {
 colorElement.style.color='red'
}*/
