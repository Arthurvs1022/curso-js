function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement("img")
       img.setAttribute('id', 'foto')
      
       if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', './img003/bebe_h.png')
            }else if (idade <= 21){
                img.setAttribute('src', './img003/jovem_h.png')
            }else if (idade <= 50){
                img.setAttribute('src', './img003/homem.png')
            }else {
                img.setAttribute('src', './img003/idoso_h.png')
            }

         } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', './img003/bebe_m.png')
            }else if (idade <= 21){
                img.setAttribute('src', './img003/jovem_m.png')
            }else if (idade <= 50){
                img.setAttribute('src', './img003/mulher.png')
            }else {
                img.setAttribute('src', './img003/idoso_m.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}