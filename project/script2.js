let num = document.querySelector("input#txtn")
let lista = document.querySelector("select#val")
let res = document.querySelector("div#res")
let valor = []
function isNum(n){
    if(Number(n) >= 1 &&  Number(n) <= 100){
    return true
}
    else{
        return false
    }

}
function inLis(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function add(){
    if(isNum(num.value) && !inLis(num.value, valor)){
        valor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert("Número inválido ou já existe")
    }
    num.value = ''
    num.focus()
   

}
function calcular(){
    if(valor.length == 0){
        window.alert('Espaço em branco')

    }else{
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for(let pos in valor){
            soma += valor[pos]
            if (valor[pos]> maior)
            maior = valor[pos]
            
           
            if(valor[pos] < menor)
            menor = valor[pos]
           
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>${total} números inseridos</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
    
        
}