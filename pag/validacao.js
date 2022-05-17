
function cadastrar(){

    var nome = input_nome.value;
    var email = input_gmail.value;
    var telefone = (input_telefone.value);
    var senha = input_senha.value;
    var confirmaSenha = input_confirmaSenha.value;
    
    

    if (nome == "" && telefone == "" && email == "" && senha == "" && confirmaSenha == "") {
      input_nome.style.border = "red  solid 5px"
      input_gmail.style.border = "red  solid 5px"
      input_telefone.style.border = "red  solid 5px"
      input_senha.style.border = "red  solid 5px"
      input_confirmaSenha.style.border = "red  solid 5px"
      erroCadastro.innerHTML = "Mensagem de erro para todos os campos em branco";
      erro0.style.display = ""
    } 
}

 function   validarNome() {
  var nome = input_nome.value;

    if (nome.length < 10   ){
    input_nome.style.border = "red  solid 5px"
    erro1.style.display = ""
    mensagem_erro.innerHTML = " nome invalido  " 
  }
}

function validarEmail(){
  var email = input_gmail.value;

   if (email.indexOf("@")  == -1 ){
    input_gmail.style.border = "red  solid 5px"
    erro2.style.display = ""
    erroEmail.innerHTML = "email invalido @ ";
  }else if (email.indexOf(".com")   == -1 ){
    input_gmail.style.border = "red  solid 5px"
    erro2.style.display = ""
    erroEmail.innerHTML = "email invalido .com ";
  }

}




 
