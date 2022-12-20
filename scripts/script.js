const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")




let prova = setInterval(()=>{
    let today = new Date()
    let Xmas = new Date("2022-12-25 00:00:000")
    const diffTime = Math.abs( Xmas  - today );
    let diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);   
    
    seconds.innerText=diffSeconds
    console.log(diffSeconds)
}, 1000)








//stampo i giorni 
// days.innerText= diffDays;
// hours.innerText= diffHours;
// minutes.innerText= diffDays;