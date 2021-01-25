var num1 = parseFloat(window.prompt("Digite um número:"));
var num2 = parseFloat(window.prompt("Digite outro número:"));
calculadora(num1, num2);
function calculadora(num1, num2) {
    window.alert(`Soma: ${num1 + num2}
        \nSubtração: ${num1 - num2} 
        \nMultiplicação: ${num1 * num2}
        \nDivisão: ${num1 / num2}
        `);
}