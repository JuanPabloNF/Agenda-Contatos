let banco_de_dados = [];
let index = -1;



function incluir() {
    document.getElementById("include").disabled = true;
    document.getElementById("save").disabled = false;
    document.getElementById("cancel").disabled = false;
    document.getElementById("name").disabled = false;
    document.getElementById("surname").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("telephone").disabled = false;
}

function salvar(event) {
    event.preventDefault();

    let username = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let address = document.getElementById("address").value;
    let telephone = document.getElementById("telephone").value;

    const banco_cadastro = {
        nome: username,
        sobrenome: surname,
        endereço: address,
        telefone: telephone
    };

    if (username === "" || surname === "" || address === "" || telephone === "") {
        alert("Campo vázio");

    } else {
        banco_de_dados.push(banco_cadastro);
        console.log(banco_de_dados);
       habilitarBotão();
    }


    limpar();




}

function editar() {

    if (index >= 0 && index < banco_de_dados.length) {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const address = document.getElementById("address").value;
        const telephone = document.getElementById("telephone").value;

        if (name && surname && address && telephone) {
            banco_de_dados[index] = { name, surname, address, telephone };
        } else {
            alert("todos os campos precisam ser preenchidos!")
        }


    } else {
        alert("Sem dados!");
    }


}

function excluir() {
    if (index >= 0 && index < banco_de_dados.length) {
        banco_de_dados.splice(index, 1);
        alert("Excluído com sucesso!");
        limpar();
        desabilitarBotão();
        if (banco_de_dados.length > 0) {
            index = Math.max(0, index - 1);
            carregarContato(index);

        } else {
            index = -1;
        }
    } else {
        alert("Nenhum contato selecionado!");
    }


}

function cancelar() {
    document.getElementById("name").disabled = true;
    document.getElementById("surname").disabled = true;
    document.getElementById("address").disabled = true;
    document.getElementById("telephone").disabled = true;
    document.getElementById("edit").disabled = true;
    document.getElementById("save").disabled = true;
    document.getElementById("delet").disabled = true;
    document.getElementById("cancel").disabled = true;
    document.getElementById("include").disabled = false;

    limpar();

}



function proximo() {
    if (banco_de_dados.length > 0) {
        if (index < banco_de_dados.length - 1) {
            index++;
            carregarContato(index);
        } else {
            alert("Você já está no ultimo item");
        }
    } else {
        alert("Não há registros!");
    }
}

function anterior() {
    if (banco_de_dados.length > 0) {
        if (index > 0) {
            index--;
            carregarContato(index);
        } else {
            alert("Você já está no primeiro item");
        }
    } else {
        alert("Não há registros!");
    }
}

function ultimo() {
    if (banco_de_dados.length > 0) {
        index = banco_de_dados.length - 1;
        carregarContato(index);
    } else {
        alert("Não há dados armazenados");
    }

}

function primeiro() {
    if (banco_de_dados.length > 0) {
        index = 0;
        carregarContato(index);

    } else {
        alert("Não há dados armazenados");
    }



}


function carregarContato(index) {
    let contato = banco_de_dados[index];
    document.getElementById("name").value = contato.nome;
    document.getElementById("surname").value = contato.sobrenome;
    document.getElementById("address").value = contato.endereço;
    document.getElementById("telephone").value = contato.telefone;
}


function habilitarBotão() {
    document.getElementById("edit").disabled = false;
    document.getElementById("delet").disabled = false;
    document.getElementById("botaoProximo").disabled = false;
    document.getElementById("botaoAnterior").disabled = false;
    document.getElementById("botaoUltimo").disabled = false;
    document.getElementById("botaoPrimeiro").disabled = false;


}


function desabilitarBotão() {
    document.getElementById("edit").disabled = true;
    document.getElementById("delet").disabled = true;
    document.getElementById("botaoProximo").disabled = true;
    document.getElementById("botaoAnterior").disabled = true;
    document.getElementById("botaoUltimo").disabled = true;
    document.getElementById("botaoPrimeiro").disabled = true;
}





function limpar() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("telephone").value = "";


}

