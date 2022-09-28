function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`

    if (hora >= 0 && hora < 12) { //foto dia
        img.src = './imagens/manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){ //foto tarde
        img.src = './imagens/tarde.png'
        document.body.style.background = '#6e4c1f'
    }else { //foto noite
        img.src = './imagens/noite.png'
        document.body.style.background = '#515154'
    }
}