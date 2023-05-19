function MostrarNome() {
    let Nome = document.getElementById('pNome').value;
    let Sobrenome = document.getElementById('pSobre').value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá '+ NomeCompleto);
}
let valor1;
let valor2;
let resultado;
function somar(){
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if(valor1==""||valor2==""){
        alert("Preencha todos os Campos")
    }else{
    resultado = parseInt(valor1)+parseInt(valor2);
    alert("o resultado da Soma é " +resultado);
    }
}
function sub(){
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if(valor1==""||valor2==""){
        alert("Preencha todos os Campos")
    }else{
    resultado = parseInt(valor1)-parseInt(valor2);
    alert("o resultado da Subtração é " +resultado);
    }
}
function mult(){
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if(valor1==""||valor2==""){
        document.getElementById("pValor1").focus();
        alert("Preencha todos os Campos");
        
    }else{
    resultado = parseInt(valor1)*parseInt(valor2);
    alert("o resultado da Multiplicação é " +resultado);
    }
}
function div(){
    valor1 = document.getElementById('pValor1').value;
    valor2 = document.getElementById('pValor2').value;
    if(valor1==""||valor2==""){
        alert("Preencha todos os Campos")
    }else if(valor2==0){
        alert("não Podemos dividir por ZERO")
    }else{
    resultado = parseInt(valor1)/parseInt(valor2);
    alert("o resultado da Multiplicação é " +resultado);
    }
}

