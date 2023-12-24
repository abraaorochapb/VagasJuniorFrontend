const modalBtn = document.querySelector(".post-vaga");
const modal = document.querySelector("dialog");
const enviarBrn = document.querySelector(".submit-btn");

modalBtn.onclick = () => {
    modal.showModal();
}

function validarFormulario() {
    var setorSelecionado = document.querySelector('input[name="setor"]:checked');
    if (!setorSelecionado) {
        alert("Selecione pelo menos um setor");
        return false;
    }
    return true;
}

enviarBrn.addEventListener("click", (event) => {
    if (validarFormulario()) {
        const modal = document.querySelector(".modal");
        modal.close();
    }
})