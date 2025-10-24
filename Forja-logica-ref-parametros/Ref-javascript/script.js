function calcular(numero1, numero2, resposta, operandor){
    var num1 = parseFloat(document.getElementById(numero1).value)
    var num2 = parseFloat(document.getElementById(numero2).value)
    var resultado

    switch (operandor) {
        case '+':
            resultado = num1 + num2
            break;
        case '-':
            resultado = num1 - num2
            break;
        case '*':
            resultado = num1 * num2
            break;
        case '/':
            resultado = num1 / num2
            break;
        
        default: "Operador invalodo"
            break;
    }

    document.getElementById(resposta).textContent = resultado

}