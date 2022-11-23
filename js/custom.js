// let counter = document.querySelector(".counter")
// let counter1 = document.querySelector(".counter1")
// let counter2 = document.querySelector(".counter2")
// let counterNumber = 0
// let counter1Number = 0
// let counter2Number = 0


// function count(){

//     counterNumber++
//     counter1Number++
//     counter2Number++
//     counter.innerHTML = counterNumber
//     counter1.innerHTML = counter1Number
//     counter2.innerHTML = counter2Number

//     if(counterNumber >= counter.dataset.number){
//         clearInterval(stop)
//         if(counter1Number >= counter1.dataset.number){
//             clearInterval(stop1)
//             if(counter2Number >= counter2.dataset.number){
//                 clearInterval(stop2)
//             }
//         }
//     }
//     console.log(counterNumber);
// }


// let stop  = setInterval(()=>{

//     count()
// }, counter.dataset.speed)
// let stop1  = setInterval(()=>{

//     count()
// }, counter1.dataset.speed)
// let stop2  = setInterval(()=>{

//     count()
// }, counter2.dataset.speed)











let counter = document.querySelector(".counter")
let counter1 = document.querySelector(".counter1")
let counter2 = document.querySelector(".counter2")
let counterNumber = 0
let counter1Number = 0
let counter2Number = 0


function count(){

    counterNumber++
    counter.innerHTML = counterNumber

    if(counterNumber >= counter.dataset.number){
        clearInterval(stop)
    }
    console.log(counterNumber);
}

function count1(){

    counter1Number++
    counter1.innerHTML = counter1Number

    if(counter1Number >= counter1.dataset.number){
        clearInterval(stop1)
    }
    console.log(counter1Number);
}

function count2(){

    counter2Number++
    counter2.innerHTML = counter2Number

    if(counter2Number >= counter2.dataset.number){
        clearInterval(stop2)
    }
    console.log(counter2Number);
}


let stop  = setInterval(()=>{

    count()
}, counter.dataset.speed)
let stop1  = setInterval(()=>{

    count1()
}, counter1.dataset.speed)
let stop2  = setInterval(()=>{

    count2()
}, counter2.dataset.speed)

