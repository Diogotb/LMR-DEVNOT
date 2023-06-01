
function mudarConteudo() {
    let nome = fPessoas.fNome.value;
    let sobrenome = document.getElementById("fSobrenome").value;
    let idade = document.getElementById("fIdade").value;
    let email = document.getElementById("fEmail").value;
    let img = document.querySelector("#fAvatar");
    
    
    let imagem = img.getAttribute('src');

    let card = `<div class="card" style="width: 18rem;">
    <img src="${imagem}" class="card-img-top" alt="...">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${nome}</li>
        <li class="list-group-item">${sobrenome}</li>
        <li class="list-group-item">${idade}</li>
        <li class="list-group-item">${email}</li>
    </ul>
</div>`;

    document.getElementById("paragrafo").innerHTML += card;
    fPessoas.reset();
  }