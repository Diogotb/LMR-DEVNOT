// coletar as informações em uma variavel
    let nome = document.getElementById("pNome").value;
    let endereco = document.getElementById("pEndereco").value;
    let email = document.getElementById("pEmail").value;
    let confEmail = document.getElementById("pConfEmail").value;
    let senha = document.getElementById("pSenha").value;
    let confSenha = document.getElementById("pConfSenha").value;

    function enviar(){
    // conferência dos Campos
    if(nome==""){
        alert("Campo Nome não Preenchido");
    }else if(endereco==""){
        alert("Campo Endereço não Preenchido");
    }else if(email==""){
        alert("Campo Email não Preenchido");
    }else if(senha==""){
        alert("Campo Senha não Preenchido");
    } else{
        alert("Formulário enviado")
    }
}
function verificarEmail(){
    if(email != confEmail){
        alert("Campo Confirmar Email não Confere")
    }
}

function verificarSenha(){
    if(senha != confSenha){
        alert("Campo Confirmar Senha não Confere")
    }
}