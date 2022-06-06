
function validarEmail() {
    var email = email_input.value;

    if (email.posicaoOf("@") == -1 && email.indexOf(".com") == -1) {
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

                var FilmesFavorito = []


                if (json.Slasher != "") {
                    FilmesFavorito.push(json.Slasher)
                }
                if (json.Alien != "") {
                    FilmesFavorito.push(json.Alien)
                }
                if (json.Trash != "") {
                    FilmesFavorito.push(json.Trash)
                }
                if (json.Fantasma != "") {
                    FilmesFavorito.push(json.Fantasma)
                } if (json.Zumbi != "") {
                    FilmesFavorito.push(json.Zumbi)
                }

                sessionStorage.FilmesFavoritoPrimeiro = FilmesFavorito[0]
                sessionStorage.FilmesFavoritoSegundo = FilmesFavorito[1]
                sessionStorage.FilmesFavoritoTerceiro = FilmesFavorito[2]

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.IdUsuario;


                loading.style.backgroundImage = 'url(https://i.gifer.com/embedded/download/I3uQ.gif)'
                none1.style.display = 'none'
                none2.style.display = 'none'
                none3.style.display = 'none'
                none4.style.display = 'none'


                setTimeout(function () {
                    window.location = "/dashboard/deashboard.html";

                }, 4000);// apenas para exibir o loading

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
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    var NomeUsuario = document.getElementById("NomeUsuario");

    filmefavorito.innerHTML = sessionStorage.FilmesFavoritoPrimeiro
    filmeFavorito2.innerHTML = sessionStorage.FilmesFavoritoSegundo
    FavoritoTerceiro.innerHTML = sessionStorage.FilmesFavoritoTerceiro

    if (nome != null) {
        //  window.alert(`Seja bem-vindo, ${nome}!`);
        NomeUsuario.innerHTML = nome;

    } else {
        // window.location = "../login.html";
    }
}
function filmes() {

    window.location = "./filmes.html";


}
function sair() {

    loading.style.backgroundImage = 'url(https://i.makeagif.com/media/10-19-2015/Fmw3yd.gif) no-repeat'

    navbar.style.display = 'none'
    menu.style.display = 'none'
    box.style.display = 'none'
    alerta.style.display = 'none'

    setTimeout(function () {

        window.location = "../login.html";

    }, 4000);// apenas para exibir o loading

};
function dashbord() {
       
            window.location = "./deashboard.html";
    

}
function GraficoUm(){
    window.location ='ranking.html'
    setTimeout(() => {
        ranking()
    }, 2000);
}
function GraficoDois(){
    window.location ='ranking.html'
    setTimeout(() => {
        rankingDois()
    }, 2000);
}
function GraficoTres(){
    window.location ='ranking.html'
    setTimeout(() => {
        rankingTres()
    }, 2000);
}
function ranking() {

    

    var lista1 = ['O Massacre da Serra Eletrica','Panico','Sexta-Ferira 13','halloween','O Brinquedo Assassino']
    var lista2 =['Alien','Predator','Alien  Vs Predator','O Enigma de outro mundo','Guerra dos Mundos']
    var lista3 =['Evil Dead 2','Fome Animal ','Palhaços assassino do Espaço','Ataque Dos Vermes malditos','Re-Animator']
    var lista4 =[ 'Invocação do Mal','O Grito','o chamado','O Exorcista','A  Hora do Pesadelo']
    var lista5 = ['Madrugada dos Mortos','Exterminio','REC','Resedent Evil','Guerra Mundial Z']


    var filme1 = sessionStorage.FilmesFavoritoPrimeiro
   

    for (var posicao = 0; posicao < lista1.length || posicao < lista2.length || posicao < lista3.length 
        || posicao < lista4.length ||posicao < lista5.length  ;  posicao++) {
       
       if( lista1[posicao] ==  filme1     ){
        Slasher.style.display = ''
        Alien.style.display = 'none'
        Trash.style.display = 'none'
        Fantasma.style.display = 'none'
        Zumbi.style.display = 'none'
       
       }else if( lista2[posicao] ==  filme1   ){
            Slasher.style.display = 'none'
            Alien.style.display = ''
            Trash.style.display = 'none'
            Fantasma.style.display = 'none'
            Zumbi.style.display = 'none'
            
        }else if(lista3[posicao] ==  filme1  ){
            Slasher.style.display = 'none'
            Alien.style.display = 'none'
            Trash.style.display = ''
            Fantasma.style.display = 'none'
            Zumbi.style.display = 'none'
            
        }else if( lista4[posicao] ==  filme1 ){
            Slasher.style.display = 'none'
            Alien.style.display = 'none'
            Trash.style.display = 'none'
            Fantasma.style.display = ''
            Zumbi.style.display = 'none'
           
        }else  if (lista5[posicao] ==  filme1  ){
          
            Alien.style.display = 'none'
            Slasher.style.display = ''
            Trash.style.display = 'none'
            Fantasma.style.display = 'none'
            Zumbi.style.display = 'none'
            
        }
        
    }

      
    


}
function rankingDois() {

    

    var lista1 = ['O Massacre da Serra Eletrica','Panico','Sexta-Ferira 13','halloween','O Brinquedo Assassino']
    var lista2 =['Alien','Predator','Alien  Vs Predator','O Enigma de outro mundo','Guerra dos Mundos']
    var lista3 =['Evil Dead 2','Fome Animal ','Palhaços assassino do Espaço','Ataque Dos Vermes malditos','Re-Animator']
    var lista4 =[ 'Invocação do Mal','O Grito','o chamado','O Exorcista','A  Hora do Pesadelo']
    var lista5 = ['Madrugada dos Mortos','Exterminio','REC','Resedent Evil','Guerra Mundial Z']


    
    var filme2 = sessionStorage.FilmesFavoritoSegundo
    

    for (var posicao = 0; posicao < lista1.length || posicao < lista2.length || posicao < lista3.length 
        || posicao < lista4.length ||posicao < lista5.length  ;  posicao++) {
       
       if( lista1[posicao] ==  filme2     ){
        Slasher.style.display = ''
        Alien.style.display = 'none'
        Trash.style.display = 'none'
        Fantasma.style.display = 'none'
        Zumbi.style.display = 'none'
       
       }else if( lista2[posicao] ==  filme2   ){
            Slasher.style.display = 'none'
            Alien.style.display = ''
            Trash.style.display = 'none'
            Fantasma.style.display = 'none'
            Zumbi.style.display = 'none'
            
        }else if(lista3[posicao] ==  filme2  ){
            Slasher.style.display = 'none'
            Alien.style.display = 'none'
            Trash.style.display = ''
            Fantasma.style.display = 'none'
            Zumbi.style.display = 'none'
            
        }else if( lista4[posicao] ==  filme2 ){
            Slasher.style.display = 'none'
            Alien.style.display = 'none'
            Trash.style.display = 'none'
            Fantasma.style.display = ''
            Zumbi.style.display = 'none'
           
        }else  if (lista5[posicao] ==  filme2  ){
          
            Alien.style.display = 'none'
            Slasher.style.display = 'none'
            Trash.style.display = 'none'
            Fantasma.style.display = 'none'
            Zumbi.style.display = ''
            
        }
        
    }
}
function rankingTres() {

    

    var lista1 = ['O Massacre da Serra Eletrica','Panico','Sexta-Ferira 13','halloween','O Brinquedo Assassino']
    var lista2 =['Alien','Predator','Alien  Vs Predator','O Enigma de outro mundo','Guerra dos Mundos']
    var lista3 =['Evil Dead 2','Fome Animal ','Palhaços assassino do Espaço','Ataque Dos Vermes malditos','Re-Animator']
    var lista4 =[ 'Invocação do Mal','O Grito','o chamado','O Exorcista','A  Hora do Pesadelo']
    var lista5 = ['Madrugada dos Mortos','Exterminio','REC','Resedent Evil','Guerra Mundial Z']


    
    var filme3 = sessionStorage.FilmesFavoritoTerceiro

    for (var posicao = 0; posicao < lista1.length || posicao < lista2.length || posicao < lista3.length 
        || posicao < lista4.length ||posicao < lista5.length  ;  posicao++) {
       
       if( lista1[posicao] ==  filme3     ){
        Slasher.style.display = ''
        Alien.style.display = 'none'
        Trash.style.display = 'none'
        Fantasma.style.display = 'none'
        Zumbi.style.display = 'none'
       
       }else if( lista2[posicao] ==  filme3   ){
            Slasher.style.display = 'none'
            Alien.style.display = ''
            Trash.style.display = 'none'
            Fantasma.style.display = 'none'
            Zumbi.style.display = 'none'
            
        }else if(lista3[posicao] ==  filme3  ){
            Slasher.style.display = 'none'
            Alien.style.display = 'none'
            Trash.style.display = ''
            Fantasma.style.display = 'none'
            Zumbi.style.display = 'none'
            
        }else if( lista4[posicao] ==  filme3 ){
            Slasher.style.display = 'none'
            Alien.style.display = 'none'
            Trash.style.display = 'none'
            Fantasma.style.display = ''
            Zumbi.style.display = 'none'
           
        }else  if (lista5[posicao] ==  filme3  ){
          
            Alien.style.display = 'none'
            Slasher.style.display = 'none'
            Trash.style.display = 'none'
            Fantasma.style.display = 'none'
            Zumbi.style.display = ''
            
        }
        
    }
    

}
// function dadosCritica() {

//     fetch('/critica/listar').then(function (resposta) {
//         resposta.json().then(function (respose) {
//             console.log(respose[0])

//             NivelCriticaFilme.innerHTML = respose[0].avaliacaoUsuario

//         })


//     })


// }
function avaliarPrimeiroFilme(){
    var filme = sessionStorage.FilmesFavoritoPrimeiro
    var id = sessionStorage.ID_USUARIO
    var avaliacao = 1;

    fetch('/critica/Avaliacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
            nomeFilmeServer: filme,
            idUsuarioServer: id,
            avaliacaoUsuarioServer: avaliacao,
  
        }),
      })
        


}
function umaEstrela(){
    nivelEstrela1.style.display = "none "
    nivelEstrela2.style.display = "none "
    nivelEstrela3.style.display = "none "
    nivelEstrela1.style.backgroundColor = 'red'
    nivelEstrela1.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'red',
        color: 'red',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoPrimeiro
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 1;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaPrimeiro ()
        mediaPrimeiroFilme.innerHTML = sessionStorage.MEDIAPRIMEIROFILME

}
function duasEstrelas(){
    nivelEstrela1.style.display = "none "
    nivelEstrela3.style.display = "none "
    nivelEstrela2.style.backgroundColor = 'yellow'
    nivelEstrela2.style.border = 'white'
    nivelEstrela2.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'yellow',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoPrimeiro
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 3;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaPrimeiro ()
        mediaPrimeiroFilme.innerHTML = sessionStorage.MEDIAPRIMEIROFILME
}
function tresEstrelas(){
    nivelEstrela1.style.display = "none "
    nivelEstrela2.style.display = "none "
    nivelEstrela3.style.backgroundColor = 'green'
    nivelEstrela3.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'green',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoPrimeiro
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 5;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaPrimeiro ()
        mediaPrimeiroFilme.innerHTML = sessionStorage.MEDIAPRIMEIROFILME
}
function umaEstrelaCentro(){
    nivelEstrela6.style.display = "none "
    nivelEstrela7.style.display = "none "
    nivelEstrela5.style.backgroundColor = 'red'
    nivelEstrela5.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'red',
        color: 'red',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoSegundo
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 1;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaSegundo ()
        mediaSegundoFilme.innerHTML = sessionStorage.MEDIASEGUNDOFILME
}
function doisEstrelaCentro(){
    nivelEstrela5.style.display = "none "
    nivelEstrela7.style.display = "none "
    nivelEstrela6.style.backgroundColor = 'yellow'
    nivelEstrela6.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'yellow',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoSegundo
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 3;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaSegundo ()
        mediaSegundoFilme.innerHTML = sessionStorage.MEDIASEGUNDOFILME
}
function tresEstrelaCentro(){
    nivelEstrela5.style.display = "none "
    nivelEstrela6.style.display = "none "
    nivelEstrela7.style.backgroundColor = 'green'
    nivelEstrela7.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'green',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoSegundo
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 5;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaSegundo ()
        mediaSegundoFilme.innerHTML = sessionStorage.MEDIASEGUNDOFILME
}
function umaEstrelaEsque(){
    nivelEstrela9.style.display = "none "
    nivelEstrela10.style.display = "none "
    nivelEstrela8.style.backgroundColor = 'red'
    nivelEstrela8.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'red',
        color: 'red',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoTerceiro
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 1;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaTerceira ()
        mediaTerceiro.innerHTML = sessionStorage.MEDIATERCEIROFILME
}
function DuasEstrelaEsque(){
    nivelEstrela8.style.display = "none "
    nivelEstrela10.style.display = "none "
    nivelEstrela9.style.backgroundColor = 'yellow'
    nivelEstrela9.style.color = 'yellowe'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        
        color: 'yellow',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoTerceiro
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 3;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
          
        mediaTerceira ()
        mediaTerceiro.innerHTML = sessionStorage.MEDIATERCEIROFILME
}
function TresEstrelaEsque(){
    nivelEstrela9.style.display = "none "
    nivelEstrela8.style.display = "none "
    nivelEstrela10.style.backgroundColor = 'green'
    nivelEstrela10.style.color = 'white'
    Swal.fire({
        icon: 'sucesso',
        title: 'Obrigado Pela Avaliação',
        text: '',
        color: 'green',
        background: 'black',
        timer: 1500,
        width: 450,
        height: 450,
      })
      var filme = sessionStorage.FilmesFavoritoTerceiro
      var id = sessionStorage.ID_USUARIO
      var avaliacao = 5;
  
      fetch('/critica/Avaliacao', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
    
              nomeFilmeServer: filme,
              idUsuarioServer: id,
              avaliacaoUsuarioServer: avaliacao,
    
          }),
        })
        mediaTerceira ()
        mediaTerceiro.innerHTML = sessionStorage.MEDIATERCEIROFILME
}
function mediaPrimeiro (){
     
    var filme = sessionStorage.FilmesFavoritoPrimeiro
    

    fetch('/critica/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
            nomeFilmeServer: filme,   
  
        }),
      }).then(function(resposta){
            resposta.json().then(function(respose){
                console.log(respose[0])
                var M = respose[0].Media
                mediaPrimeiroFilme.innerHTML = M.toFixed(1)
            })

      })



}
function mediaSegundo (){
     
    var filme = sessionStorage.FilmesFavoritoSegundo
    

    fetch('/critica/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
            nomeFilmeServer: filme,   
  
        }),
      }).then(function(resposta){
            resposta.json().then(function(respose){
                console.log(respose[0])
            
                  var M = respose[0].Media
                  mediaSegundoFilme.innerHTML = M.toFixed(1)
            })

      })



}
function mediaTerceira (){
     
    var filme = sessionStorage.FilmesFavoritoTerceiro
    

    fetch('/critica/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
            nomeFilmeServer: filme,   
  
        }),
      }).then(function(resposta){
            resposta.json().then(function(respose){
                console.log(respose[0])
                var M = respose[0].Media
                mediaTerceiro.innerHTML = M.toFixed(1)
            })

      })



}

