function workingDay (wakeUp) {
    console.log('Хлопче час прокидатися!')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUp < 7.30) {
                resolve('Ти прокинувся!!!');
            } else {
                reject('Вітаю ти проспав');
            }
        }, 1000)
    });
}

function takeShower (timeShower){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (timeShower<7.4){
            resolve ('Приймай ДУШ')
        } else {
            reject ('Часу на душ НЕМА')
        }
        },2000)
    })
}
function breakfast (timeBreakfast){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (timeBreakfast<8.00){
                resolve ('Час сніданку.Смачного')
            } else {
                reject ('Часу поснідати немає. Будеш голодний!')
            }
        },2000)
    })
}

function goWork (timeGoWork){
        return new Promise((resolve,reject)=>{
            setTimeout( ()=>{
                if( timeGoWork<9.00){
                    resolve('Відпрацюй цей день сумлінно!!')
                }else {
                    reject ( 'Ти спізнився. Керівництво випише люлєй.')
                }
            },1200)
        })
}

function goHome (timeGoHome){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            if( timeGoHome>18.00){
                resolve('Час збиратися додому.Ти відпрацював більше 8 годин')
            }else {
                reject ( 'Халявщик, знову додому швидше ідеш.')
            }
        },1000)
    })
}

function dinner (timeDinner){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            if( timeDinner>19.00){
                resolve('Час вечері.Перекуси')
            }else {
                reject ( 'Нажаль ти не встиг повечеряти')
            }
        },500)
    })
}

function bath (timeBath){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            if( timeBath<21.00){
                resolve('Відпочинь.Розслабся.Прийми ванну')
            }else {
                reject ( 'Ти не встиг прийняти ванну(((')
            }
        },1200)
    })
}

function slip (timeSlip){
    return new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            if( timeSlip<22.00){
                resolve('Надобраніч.Солодких снів')
            }else {
                reject ( 'Знов пізно лягаєш,не виспишся(')
            }
        },1200)
    })
}
workingDay(7.29)
    .then((result)=>{
        console.log(result);
        return takeShower(7.39)
    })
        .then((result)=>{
            console.log(result)
            return breakfast(7.55)
        })
        .then((result)=>{
            console.log(result)
            return goWork(8.55)
        })
    .then((result)=>{
        console.log(result)
        return goHome(18.01)
    })
    .then((result)=>{
        console.log(result)
        return dinner(19.01)
    })
    .then((result)=>{
        console.log(result)
        return bath(20.10)
    })
    .then((result)=>{
        console.log(result)
        return slip(21.10)
    })
    .then((result)=>{
        console.log(result)
    })
    .catch(end=>{
        console.log(end);
    })