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
function proximo(){
  var nome = input_nome.value;
  var email = email_input.value;
  var senha = input_senha.value;
  var confirmaSenha = input_ConfirmaSenha.value;

  if (nome == "" && email == "" && senha == "" && confirmaSenha == "") {
    // alert("preencha os campos")
      Swal.fire({
      icon: 'error',
      title: 'erro no cadastro',
      text: 'Campos em branco',
      color: 'red',
      color: 'red',
      background: 'black',
      width: 450,
      height:450,
      
    })

    input_nome.style.border = "red  solid 5px"
    email_input.style.border = "red  solid 5px"
    input_senha.style.border = "red  solid 5px"
    input_ConfirmaSenha.style.border = "red  solid 5px"

  }else {
    
  formularioFIlme.style.display = "";
  formulario1.style.display = "none"
  }
}



function cadastro() {
    
  
  var nome = input_nome.value;
  var email = email_input.value;
  var senha = input_senha.value;
  var Slasherfilme = Slasher.value;
  var Alienfilme = Alien.value;
  var Trashfilme = Trash.value;
  var Fantasmafilme = Fantasma.value;
  var Zumbifilme = Zumbi.value;

 

  if (nome == ""  && email == "" && senha == "" &&  Slasherfilme == "" && Alienfilme == "" && Trashfilme == "" && Fantasmafilme == "" && Zumbifilme == "") {
    
    
   
  
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
        senhaServer: senha,
      

        SlasherServer: Slasherfilme,
        AlienServer: Alienfilme,
        trashServer: Trashfilme,
        FantasmaServer: Fantasmafilme,
        ZumbiServer: Zumbifilme,


      }),
    })
      .then(function (resposta) {
        console.log('resposta: ', resposta);

        if (resposta.ok) {
          setTimeout(() => {
            window.location = "login.html";
          }, "2000")

        } else {
          Swal.fire({
            icon: 'error',
            title: 'erro',
            text: 'escolha pelo menos 1 filme',
            color: 'red',
            color: 'red',
            background: 'black',
            width: 450,
            height:450,
            
          })
         
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

  function  FilmeSlasher(){
    Slasher.style.display = ''
    divContainer.style.display = 'none'  
  }
  function slasher(){
    Slasher.style.display = 'none'
    divContainer.style.display = ''
  }
  function filmesTrash(){
    filmeTrash.style.display = 'none'
    trashProximo.style.display = ''
  }
  function trash() {
    filmeTrash.style.display = ''
    trashProximo.style.display = 'none'
  }
  function FilmesFantasma(){
    filmeFantasma.style.display = 'none'
    fantasmaProximo.style.display = ''
  }
  function fantasma(){
    filmeFantasma.style.display = ''
    fantasmaProximo.style.display = 'none'
  }
  function Filmeszumbi(){
    filmeZumbi.style.display = 'none'
    proximozumbi.style.display = ''
  }
 function zumbi(){
  filmeZumbi.style.display = ''
  proximozumbi.style.display = 'none'
 }
