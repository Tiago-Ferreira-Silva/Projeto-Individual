
function validar() {
  var nome = input_nome.value;

  if (nome.length < 5) {
    input_nome.style.border = "red  solid 5px"
    erroNome1.style.display = ""
    erroNome.innerHTML = " nome invalido "
    erroNome.style.color = "red"
  } else {
    input_nome.style.border = ""
    erroNome1.style.display = ""
    erroNome.innerHTML = " "
    erroNome.style.color = ""
  }
}

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

  function cadastro() {
    

    var nome = input_nome.value;
    var email = email_input.value;
    var telefone = (input_telefone.value);
    var senha = input_senha.value;
    var confirmaSenha = input_ConfirmaSenha.value;



    if (nome == "" && telefone == "" && email == "" && senha == "" && confirmaSenha == "") {
      input_nome.style.border = "red  solid 5px"
      email_input.style.border = "red  solid 5px"
      input_telefone.style.border = "red  solid 5px"
      input_senha.style.border = "red  solid 5px"
      input_ConfirmaSenha.style.border = "red  solid 5px"
      erroCadastro.innerHTML = "Mensagem de erro para todos os campos em branco";
      erroNome1.style.display = ""
      erroNome1.style.color = "red"

    
      return false;
    } else{

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

