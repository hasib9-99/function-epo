let counter = document.querySelector(".counter")
let counter1 = document.querySelector(".counter1")
let counter2 = document.querySelector(".counter2")
let counterNumber = 0
let counter1Number = 0
let counter2Number = 0


function count(){

    counterNumber++
    counter1Number++
    counter2Number++
    counter.innerHTML = counterNumber
    counter1.innerHTML = counter1Number
    counter2.innerHTML = counter2Number

    if(counterNumber >= counter.dataset.number){
        clearInterval(stop)
    }
    console.log(counterNumber);
}


let stop  = setInterval(()=>{

    count()
}, counter.dataset.speed)

