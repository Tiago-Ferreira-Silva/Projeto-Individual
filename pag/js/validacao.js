function validarEmail() {
  var email = email_input.value;

  if (email.indexOf("@") == -1 && email.indexOf(".com") == -1) {
    email_input.style.border = "red  solid 5px"
    erro2.style.display = ""
    erroEmail.innerHTML = "email invalido @ e .com";
    erroEmail.style.color = "red"
  } else if (email.indexOf("@") == -1) {
    email_input.style.border = "red  solid 5px"
    erro2.style.display = ""
    erroEmail.innerHTML = "email invalido @ ";
    erroEmail.style.color = "red"
  } else if (email.indexOf(".com") == -1) {
    email_input.style.border = "red  solid 5px"
    erro2.style.display = ""
    erroEmail.innerHTML = "email invalido .com ";
    erroEmail.style.color = "red"
  } if (email.indexOf("@") >= 1 && email.indexOf(".com") >= 1) {
    email_input.style.border = "";
    erro2.style.display = "";
    erroEmail.innerHTML = "";
    erroEmail.style.color = "";
  }
}
function validarSenha() {
  var senha = input_senha.value;

  if (senha == '') {
    input_senha.style.border = "red  solid 5px"
    erro3.style.display = ""
    erroSenha.innerHTML = " senha invalida";
    erroSenha.style.color = "red"

  } else if (senha.length < 8) {
    input_senha.style.border = "red  solid 5px"
    erro3.style.display = ""
    erroSenha.innerHTML = " senha fraca ";
    erroSenha.style.color = "red"
  } else if (senha.length >= 8) {
    input_senha.style.border = ""
    erro3.style.display = ""
    erroSenha.innerHTML = " ";
    erroSenha.style.Color = "";
    return false;
  }
}
function ConfirmaSenha() {
  var confirmarSenha = input_ConfirmaSenha.value;
  var senha = input_senha.value;

  if (confirmarSenha == '') {
    input_ConfirmaSenha.style.border = "red  solid 5px"
    erro4.style.display = ""
    ConfirmaErroSenha.innerHTML = " senha invalida";
    ConfirmaErroSenha.style.color = "red"
  } else if (confirmarSenha.length < 8) {
    input_ConfirmaSenha.style.border = "red  solid 5px"
    erro4.style.display = ""
    ConfirmaErroSenha.innerHTML = " senha fraca ";
    ConfirmaErroSenha.style.color = "red"
  } else if (confirmarSenha.length >= 8) {
    input_ConfirmaSenha.style.border = ""
    erro4.style.display = ""
    ConfirmaErroSenha.innerHTML = "";
    ConfirmaErroSenha.style.color = ""
  }
  if (senha != confirmarSenha) {
    input_ConfirmaSenha.style.border = "red  solid 5px"
    erro4.style.display = ""
    ConfirmaErroSenha.innerHTML = "As senhas estão incorretas";
    ConfirmaErroSenha.style.color = "red"

    input_senha.style.border = "red  solid 5px"
    erro3.style.display = ""
    erroSenha.innerHTML = " As senhas estão incorretas";
    erroSenha.style.color = "red"


    return false;
  }
}





function proximo() {

  var nome = input_nome.value;
  var email = email_input.value;
  var senha = input_senha.value;
  var confirmaSenha = input_ConfirmaSenha.value;

  if (nome == "" && email == "" && senha == "" && confirmaSenha == "") {
    erroCadastro.innerHTML = "Mensagem de erro para todos os campos em branco";
    input_nome.style.border = "red  solid 5px"
    email_input.style.border = "red  solid 5px"
    input_senha.style.border = "red  solid 5px"
    input_ConfirmaSenha.style.border = "red  solid 5px"
    erroNome1.style.display = ""
    erroNome1.style.color = "red"
  } else {
      formulario1.style.display = 'none'
      formularioFIlme.style.display = ''
    }
  }



function cadastro() {


  var nome = input_nome.value;
  var email = email_input.value;
  var senha = input_senha.value;
  var confirmaSenha = input_ConfirmaSenha.value;
  var filme_Slasher = Slasher.value;
  var filme_Alien = Alien.value;
  var filme_Trash =  Trash.value;
  var filme_Fantasma = Fantasma.value;
  var filme_Zumbi = Zumbi.value;


  if (nome == "" && email == "" && senha == "" && confirmaSenha == "" &&
    filme_Slasher == "" && filme_Alien == "" && filme_Trash == "" && filme_Fantasma == "" && filme_Zumbi =="" ) {
      
    Slasher.style.border = "red  solid 5px"
    Alien.style.border = "red solid 5px"
    Trash.style.border = "red solid 5px"
    Zumbi.style.border = "red solid 5px"
    Fantasma.style.border = "red solid 5px"
    erroCadastroFilme.innerHTML = "escolha 1 filme"
    erroCadastroFilme.style.border = "red solid 5px"


    return false;
  } else {

    fetch('/usuarios/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({


        nomeServer: nome,
        emailServer: email,
        senhaServer: senha

      }),
    })
      .then(function (resposta) {
        console.log('resposta: ', resposta);

        if (resposta.ok) {
          setTimeout(() => {
            window.location = "login.html";
          }, "2000")

        } else {

          // alert('Houve um erro ao realizar o cadastro');
          throw 'Houve um erro ao tentar realizar o cadastro!';
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

      });
    return false;
  }
}


  function  Filmes(){
    Slasher.style.display = ''
    divContainer.style.display = 'none'
    
  }
  function Filmes2(){
    Slasher.style.display = 'none'
    divContainer.style.display = ''

  }
