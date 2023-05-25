function cadPessoas(e){
    e.preventDefault()
    var nome = document.getElementById("fNome").value;
    var sobrenome = document.getElementById("fSobrenome").value;
    var idade = document.getElementById("fIdade").value;
    var email = document.getElementById("fEmail").value;
    console.log(nome)

    
    var tb = document.getElementById("tabelaPessoas");
    var qtdLinhas = tb.ariaRowSpan.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellSobrenome = linha.insertCell(2);
    var cellIdade = linha.insertCell(3);
    var cellEmail = linha.insertCell(4);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellIdade.innerHTML = idade;
    cellEmail.innerHTML = email;
    console.log(nome)
}