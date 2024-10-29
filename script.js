let botaoTabuada = document.querySelector('#botaoTabuada')
let numero = Number(numeroTabuada)

botaoTabuada.addEventListener('click', click)
function click(){
    let numeroTabuada = document.querySelector('#numeroTabuada').value

    if (numeroTabuada.length == 0) {
        alert('Numero inválido, tente novamente.')
    }else {
        let lista = document.querySelector('#lista')
        let numero = Number(numeroTabuada)
        let contador = 1
        lista.innerText = ''
        while (contador < 10) {
            contador++
            let item = document.createElement('option')
            item.text = `${numero} X ${contador} = ${numero*contador}`
            lista.appendChild(item)
        }
    }
}

