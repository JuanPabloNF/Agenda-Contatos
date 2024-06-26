function login (event){
    event.preventDefault(); //Impedir que o form recarregue a página
        
        let username = document.getElementById("usuario").value;
        let password = document.getElementById("senha").value;
    
        if (username === "" && password === ""){
            alert("Erro, campo nome ou senha vázio");
    
        }else if(username != "admin" && password === ""){
            alert("Erro, campo nome incorreto")

        }else if (username === "" && password != "admin"){
            alert("Erro, campo senha incorreto")

        }else if(username != "admin" && password === "admin"){
            alert("Erro, campo nome incorreto")

        }else if (username === "admin" && password != "admin"){
            alert("Erro, campo senha incorreto")

        }else if(username  && password != "admin"){
            alert("Erro, nome e senha incorreto");
    
        }else{
            window.location.href= "cadastro_contato.html"

        }

    }
  
    
   
    


