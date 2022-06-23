const r = document.getElementById('red')
const g = document.getElementById('green')
const b = document.getElementById('blue')
const hex = document.getElementById('hex')

const btnConvert = document.getElementById('convert')

btnConvert.addEventListener('click',() => {
    let rc= parseInt(r.value) 
    let gc= parseInt(g.value)
    let bc= parseInt(b.value)
    let answer = rc.toString(16) + gc.toString(16) + bc.toString(16)
    hex.innerHTML = '#' + answer

    let color = '#' + answer
    document.getElementById('hexbg').innerHTML = 'The color'
    document.getElementById('hexbg').style = `background-color: ${color} ;`
})