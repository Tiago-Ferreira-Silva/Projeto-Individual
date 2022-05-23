function validarEmail(){
    var email = email_input.value;
  
    if (email.indexOf("@")  == -1  && email.indexOf(".com")   == -1 ){
      email_input.style.border = "red  solid 5px"
      erro2.style.display = ""
      erroEmail.innerHTML = "email invalido @ e .com";
      erroEmail.style.color = "red"
    }else if (email.indexOf("@")  == -1 ){
      email_input.style.border = "red  solid 5px"
      erro2.style.display = ""
      erroEmail.innerHTML = "email invalido @ ";
      erroEmail.style.color = "red"
    }else if (email.indexOf(".com")   == -1 ){
      email_input.style.border = "red  solid 5px"
      erro2.style.display = ""
      erroEmail.innerHTML = "email invalido .com ";
      erroEmail.style.color = "red"
    } 
  
  }
 


  function entrar() {
     

      var emailVar = email_input.value;
      var senhaVar = input_senha.value;


      console.log("FORM LOGIN: ", emailVar);
      console.log("FORM SENHA: ", senhaVar);

      fetch("/usuarios/autenticar", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              emailServer: emailVar,
              senhaServer: senhaVar
          })
      }).then(function (resposta) {
          console.log("ESTOU NO THEN DO entrar()!")

          if (resposta.ok) {
              console.log(resposta);

              resposta.json().then(json => {
                  console.log(json);
                  console.log(JSON.stringify(json));

                  sessionStorage.EMAIL_USUARIO = json.email;
                  sessionStorage.NOME_USUARIO = json.nome;
                  sessionStorage.ID_USUARIO = json.id;

                  setTimeout(function () {
                      window.location = "/dashboard/deashboard.html";
                  }, 2000); // apenas para exibir o loading

              });

          } else {

              console.log("Houve um erro ao tentar realizar o login!");

              resposta.text().then(texto => {
                  console.error(texto);
                  finalizarAguardar(texto);
              });
          }

      }).catch(function (erro) {
          console.log(erro);
      })

      return false;
  }

 




