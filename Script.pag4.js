function Converter(){
    let num = document.getElementById("num1").value
    let inicio = document.getElementById("inicio").value
    let fim = document.getElementById("fim").value
    let resul = document.getElementById("res")
    let dolar1 = 5.11
    let dolarcanadense1 = 4.08
    let dolaraustraliano1 = 3.77
    let real1 = 1
    //Valores com 1 significa em real
    let dolar2 = 1
    let dolarcanadense2 = 0.80
    let dolaraustraliano2 = 0.74
    let real2= 0.20
    //Valores com 2 significa em dolar
    let dolar3 = 1.24
    let dolarcanadense3 = 1
    let dolaraustraliano3 = 0.92
    let real3 = 0.25
    //Valores com 3 significa em dolar canadense
    let dolar4 = 1.36
    let dolarcanadense4 = 1.08
    let dolaraustraliano4 = 1
    let real4 = 0.27
    //Valores com 4 significa em dolar australiano




    let resultado = 0
    if(inicio == 1 && fim == 1){
        alert("Coloque duas moedas diferentes!")
}
    else if(inicio == 1 && fim == 2){
        resultado = (num / dolar1).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 1 && fim == 3){
        resultado = (num / dolarcanadense1).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 1 && fim == 4){
        resultado = (num / dolaraustraliano1).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 2 && fim == 1){
        resultado = (num * dolar1).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 2 && fim == 2){
        alert("Coloque duas moedas diferentes!")
    }
    else if(inicio == 2 && fim == 3){
        resultado = (num * dolar3).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 2 && fim == 4){
        resultado = (num * dolar4).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 3 && fim == 1){
        resultado = (num * dolarcanadense1).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 3 && fim == 2){
        resultado = (num / dolar3).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 3 && fim == 2){
        resultado = (num / dolar3).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 3 && fim == 3){
        alert("Coloque duas moedas diferentes!")
    }
    else if(inicio == 3 && fim == 4){
        resultado = (num * dolarcanadense4).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 4 && fim == 1){
        resultado = (num * dolaraustraliano1).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 4 && fim == 2){
        resultado = (num * dolaraustraliano2).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 4 && fim == 3){
        resultado = (num * dolaraustraliano3).toFixed(2)
        resul.innerHTML = "Seu resultado é: " + resultado
    }
    else if(inicio == 4 && fim == 4){
        alert("Coloque duas moedas diferentes!")
    }
}