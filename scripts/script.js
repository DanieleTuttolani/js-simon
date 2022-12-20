
let Xmas = new Date("2022-12-25 00:00:000")

let today = new Date()


const diffTime = Math.abs( Xmas  - today );
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 *24))

let secondi = today.getSeconds()
console.log( diffTime + "tempo")
console.log( diffDays + "giorni" , secondi)