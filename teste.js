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
    } 
     if (senha.length < 8) {
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
      erro5.style.display = ""
      ConfirmaErroSenha.innerHTML = " senha invalida";
      ConfirmaErroSenha.style.color = "red"
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