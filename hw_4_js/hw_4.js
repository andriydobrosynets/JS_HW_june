// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
/*


function arrRandom(lengst) {
    let randomNambers = []
    for (let i = 0; i < lengst; i++) {
        randomNambers [i] = Math.round(Math.random()*100);
    }
    console.log(randomNambers);
    return randomNambers;
}
arrRandom(5)
*/



// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.


/*
    function arrRandom(arrLong, arrRange) {
      let randNambers = [];
      for (let i = 0; i < arrLong; i++) {
        randNambers [i] = Math.round(Math.random()*arrRange);
      }
      console.log(randNambers);
      return randNambers
    }
    arrRandom(30,200);
*/



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
/*
    let sortArr = arrRandom(10,100);
    console.log(sortArr);
    sortArr.sort(function(a, b) {
        return a - b;
    });
    console.log(sortArr);
*/


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, за лишивши тільки парні числа


/*
let filterArr = arrRandom(15,100);
let farr = filterArr.filter(function (number){
        return number % 2 === 0;
})
    console.log(farr);
 */


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.

/*
    let dataArr = arrRandom(15,100);
    let mapArr = dataArr.map(function (items){
        return items + ''
    })
    console.log(mapArr);
*/


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
/*
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
    let user11 = new User(21, 'Petro', 'Perovskui', 'fsdfs@.com', 95623145)
    console.log(user11);
    // створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
    let user1 = new User(21, 'fedfef', 'erfer', 'refe@.com', 0974675782)
    let user2 = new User(45, 'erfer', 'erfe', 'fersdfs@.com', 097467u82)
    let user3 = new User(8, 'refe', 'ref', 'erg@.com', 097456482)
    let user4 = new User(22, 'ref', 'erfef', 're@.com', 097456482)
    let user5 = new User(78, 'erf', 'Rok', 'reg@.com', 097463282)
    let user6 = new User(12, 'ref', 'Pero', 'rge@.com', 097463456)
    let user7 = new User(31, 'erf', 'Dar', 'rege@.com', 097464562)
    let user8 = new User(42, 'cedc', 'Rak', 'rege@.com', 097463282)
    let user9 = new User(9, 'esfsdf', 'dfs', 'rege@.com', 097475862)
    let user10 = new User(21, 'fdgd', 'hryjh', 'gs@.com', 097465672)
    let users = [];
    users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
    console.log(users);


//Відфільтрувати , залишивши тільки об'єкти з парними id (filter)
    let usersFilter = users.filter(function (id) {
        return id.id % 2 === 0;
    })
    console.log(usersFilter);


//Відсортувати його по id. по зростанню (sort)
    usersFilter.sort( function (a, b) {
        return a.id - b.id;
    })
    console.log(usersFilter);
 */