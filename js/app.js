$(function() {
    var operacao = "A";
    var indice_selecionado = -1;
    var tbClientes = localStorage.getItem("tbClientes");
    tbClientes = JSON.parse(tbClientes);

    if (tbClientes == null) {
        tbClientes = [];
    }

    $("#frmCadastro").on("submit", function() {
        if (operacao == "A") {
            return Adicionar(tbClientes);
        } else {
            return Editar(tbClientes, indice_selecionado);
        }
    });

    Listar(tbClientes);

    $("#tblListar").on("click", ".btnEditar", function() {
        operacao = "E";
        indice_selecionado = parseInt($(this).attr("alt"));
        var cli = JSON.parse(tbClientes[indice_selecionado]);
        $("#nome").val(cli.nome)
        $("#sobrenome").val(cli.sobrenome),
            $("#email").val(cli.email),
            $("#senha").val(cli.senha),
            $("#telefone").val(cli.telefone),
            $("#cep").val(cli.cep),
            $("#sexo").val(cli.sexo),
            $("#nome").focus();
        // $("#newsletter").val()

    });

    $("#tblListar").on("click", ".btnExcluir", function() {
        indice_selecionado = parseInt($(this).attr("alt"));
        Excluir(tbClientes, indice_selecionado);
        Listar(tbClientes);
    });
});

function Adicionar(tbClientes) {

    var cliente = JSON.stringify({
        nome: $("#nome").val(),
        sobrenome: $("#sobrenome").val(),
        email: $("#email").val(),
        senha: $("#senha").val(),
        telefone: $("#telefone").val(),
        cep: $("#cep").val(),
        sexo: $("#sexo").val(),
        newsletter: $("#newsletter").val(),
    });
    tbClientes.push(cliente);
    console.log("tbClientes - " + tbClientes);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    return true;
}

function Editar(tbClientes, indice_selecionado) {
    tbClientes[indice_selecionado] = JSON.stringify({
        nome: $("#nome").val(),
        sobrenome: $("#sobrenome").val(),
        email: $("#email").val(),
        senha: $("#senha").val(),
        telefone: $("#telefone").val(),
        cep: $("#cep").val(),
        sexo: $("#sexo").val(),

    });
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Informações editadas.")
    operacao = "A";
    return true;
}

function Excluir(tbClientes, indice_selecionado) {
    tbClientes.splice(indice_selecionado, 1);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro excluído.");

}

function Listar(tbClientes) {
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>" +
        "   <tr>" +
        "   <th>Nome</th>" +
        "   <th>Sobrenome</th>" +
        "   <th>Email</th>" +
        "   <th>Senha</th>" +
        "   <th>Telefone</th>" +
        "   <th>Cep</th>" +
        "   <th>Sexo</th>" +
        "   <th>Ação</th>" +
        "   </tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );
    for (var i in tbClientes) {
        var cli = JSON.parse(tbClientes[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>" + cli.nome + "</td>");
        $("#tblListar tbody").append("<td>" + cli.sobrenome + "</td>");
        $("#tblListar tbody").append("<td>" + cli.email + "</td>");
        $("#tblListar tbody").append("<td>" + cli.senha + "</td>");
        $("#tblListar tbody").append("<td>" + cli.telefone + "</td>");
        $("#tblListar tbody").append("<td>" + cli.cep + "</td>");
        $("#tblListar tbody").append("<td>" + cli.sexo + "</td>");
        $("#tblListar tbody").append("<td><img src='img/edit.png' alt='" + i + "'class='btnEditar'/><img src='img/delete.png' alt='" + i + "' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("</tr>");
    }
}

function limparCampos() {
    nome.value = '';
    sobrenome.value = '';
    email.value = '';
    senha.value = '';
    telefone.value = '';
    cep.value = '';
    sexo.value = '';
    newsletter.value = '';
}