function previewFile() {
    let preview = document.querySelector('img');
    let file    = document.querySelector('#fAvatar').files[0];
    let reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      
    }
  }


function mudarConteudo() {
    let nome = fPessoas.fNome.value;
    let sobrenome = document.getElementById("fSobrenome").value;
    let idade = document.getElementById("fIdade").value;
    let email = document.getElementById("fEmail").value;
    let imagem    = document.querySelector('#fAvatar').files[0];
    let reader  = new FileReader();
    let preview = document.querySelector('img');
    reader.onloadend = function () {
      preview.src = reader.result;
    }
    

    let card = `<div class="card" style="width: 18rem; heigth=27rem">
    <img src="${preview.src}" style="heigth: 50%" class="card-img-top" alt="...">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${nome}</li>
        <li class="list-group-item">${sobrenome}</li>
        <li class="list-group-item">${idade}</li>
        <li class="list-group-item">${email}</li>
    </ul>
</div>`;
    preview.src = "";
    document.getElementById("paragrafo").innerHTML += card;
    fPessoas.reset();
  }