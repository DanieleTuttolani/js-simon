const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")




let calcSeconds = setInterval(()=>{
    let today = new Date()
    let Xmas = new Date("2022-12-25 00:00:000")
    const diffTime = Math.abs( Xmas  - today );
    let diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);   
    seconds.innerText=diffSeconds
}, 1000)


let calcMinutes = setInterval(()=>{
    let today = new Date()
    let Xmas = new Date("2022-12-25 00:00:000")
    const diffTime = Math.abs( Xmas  - today );
    let diffSeconds = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    minutes.innerText= diffSeconds;
})

let calcHours = setInterval(()=>{
    let today = new Date()
    let Xmas = new Date("2022-12-25 00:00:000")
    const diffTime = Math.abs( Xmas  - today );
    let diffSeconds = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours.innerText= diffSeconds;
})

let calcDays = setInterval(()=>{
    let today = new Date()
    let Xmas = new Date("2022-12-25 00:00:000")
    const diffTime = Math.abs( Xmas  - today );
    let diffSeconds = Math.floor((diffTime / (1000 * 60 * 60 * 24)));
    days.innerText= diffSeconds;
})



