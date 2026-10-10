const botaoCalcular = document.getElementById("botao-calcular");

botaoCalcular.addEventListener("click", function() {

    const campoValor1 = document.getElementById("valor1");
    const campoValor2 = document.getElementById("valor2");
    const campoResultado = document.getElementById("campo-resultado");

    if (campoValor1.value ==="" || campoValor2.value ===""){
        alert("Um dos valores não foi digitado, tente novamente! ");
        return;
    } 

    const valor1 = Number(campoValor1.value);
    const valor2 = Number(campoValor2.value);

    const operacaoSelecionada = document.querySelector (
        'input[name="operacao"]:checked', 
    );

    if (operacaoSelecionada === null ){
        alert("Nenhuma operação foi selecionada, tente novamente");
        return;
    }

    const operacao = operacaoSelecionada.value;

    let resultado; 

    switch (operacao){
        case "soma":
            resultado = valor1 + valor2;
            break;
        
        case "subtracao":
             resultado = valor1 - valor2;
             break;

        case "multiplicacao":
            resultado = valor1 * valor2;
            break;

        case "divisao":
            resultado = valor1 / valor2;
            break;
    }

    

    campoResultado.value = resultado;






})