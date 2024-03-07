function aviso() {
    // const campo_nome = document.getElementById("nome");
    const campo_nome = document.querySelector("#nome");
    
    // console.log(campo_nome.value);

    // se o campo estiver vazio, dê um alert

    if (campo_nome.value == "") {
        alert("Digite o nome");
        return;
    }
}