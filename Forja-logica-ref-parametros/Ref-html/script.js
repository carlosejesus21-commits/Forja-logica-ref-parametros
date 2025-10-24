function calc(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var operandor = document.getElementById('operador').value 
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

    document.getElementById('resultado').textContent = resultado
}
