function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    var telefone = document.getElementById("telefone");
    var cep = document.getElementById("cep");
    var sexo = document.getElementById("sexo");
    var newsletter = document.getElementById("newsletter").checked;

    // verificar se o nome está vazio
    if (nome.value == "") {
        alert("Nome não informado")
            // Deixa o input com o focus
        nome.focus()
            // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o campo sobrenome está vazio
    if (sobrenome.value == "") {
        alert("Sobrenome não informado")
            // Deixa o input com o focus
        sobrenome.focus()
            // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o campo email está vazio
    if (email.value == "") {
        alert("Email não informado")
            // Deixa o input com o focus
        email.focus()
            // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o campo senha está vazio
    if (senha.value == "") {
        alert("Senha não informado")
            // Deixa o input com o focus
        senha.focus()
            // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o campo telefone está vazio
    if (telefone.value == "") {
        alert("Telefone não informado")
            // Deixa o input com o focus
        telefone.focus()
            // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o campo cep está vazio
    if (cep.value == "") {
        alert("Cep não informado")
            // Deixa o input com o focus
        cep.focus()
            // retorna a função e não olha as outras linhas
        return;
    }
    // verificar se o campo sexo está vazio
    if (sexo.value == "") {
        alert("Sexo não informado")
            // Deixa o input com o focus
        sexo.focus()
            // retorna a função e não olha as outras linhas
        return;
    }

    alert("Formulário enviado!");
}