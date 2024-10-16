function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'imagens/homembebe.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero =  'Mulher'
            if (idade >=0 && < 10) {
                //bebe
            } else if (idade =< 21) {
                //Jovem
            } else if (idade =< 50) {
                //Adulto
            } else {
                //idoso
            }            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}