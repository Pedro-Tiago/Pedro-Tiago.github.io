function calcular(){
    let sel = document.getElementById("caixa").value
    let res = 0
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let numero1 = Number(num1)
    let numero2 = Number(num2)
    let resultado = document.getElementById('resul')
    if(sel == 1){
        res = numero1 + numero2
        resultado.innerHTML = (`Seu resultado é ${(res).toFixed(2)}`)
        document.getElementById('num1').value=''
        document.getElementById('num2').value=''
    }else if(sel ==2){
        res = numero1 - numero2
        resultado.innerHTML = (`Seu resultado é ${(res).toFixed(2)}`)
        document.getElementById('num1').value=''
        document.getElementById('num2').value=''
    }
    else if(sel == 3){
        res = numero1 / numero2
        resultado.innerHTML = (`Seu resultado é ${(res).toFixed(2)}`)
        document.getElementById('num1').value=''
        document.getElementById('num2').value=''
    }else{
        res = numero1 * numero2
        resultado.innerHTML = (`Seu resultado é ${(res).toFixed(2)}`)
        document.getElementById('num1').value=''
        document.getElementById('num2').value=''
    }
}