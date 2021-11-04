function calcular(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("alt").value
    let res = document.getElementById("res")
    let resultado = peso / (altura * altura)
    res.innerHTML = `Seu IMC é ${(resultado).toFixed(2)}`
}