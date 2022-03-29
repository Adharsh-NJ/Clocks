const deg = 6
let mins = document.querySelector('#mm')
let hours = document.querySelector('#hh')
let secs = document.querySelector('#ss')

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mn = day.getMinutes() * deg
    let ss = day.getSeconds() * deg
    hours.style.transform = `rotateZ(${(hh) + (mn / 12)}deg)`
    mins.style.transform = `rotateZ(${mn}deg)`
    secs.style.transform = `rotateZ(${ss}deg)`
}, 1000)

//digital clock

let digiClk = document.querySelector("#time")

function time() {
    let date = new Date()
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    if (hours > 12) {
        digiClk.innerHTML = `${hours - 12}:${mins}:${secs} pm`
    } else {
        digiClk.innerHTML = `${hours}:${mins}:${secs} AM`
    }

}

setInterval(time, 1000)