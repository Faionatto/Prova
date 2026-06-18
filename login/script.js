const formulario = document.querySelector('form');

// Vai criar uma função para o formulario
formulario.addEventListener('submit', function (event) {

    // Evita que a página recarregue antes de mostrar os alertas
    event.preventDefault();

    // Tá puxando o id do html "form" que foi definido
    const usuarioDigitado = document.getElementById('usuario').value.trim();
    const senhaDigitada = document.getElementById('senha').value;

    //vai verificar se tem @gmail ou hotmail
    if (usuarioDigitado.includes("@gmail.com") || usuarioDigitado.includes("@hotmail.com")) {
        
    } else {
        alert("E-mail inválido! Verifique ");
        return;
    }

    // length esta contando os caracteres 
    if (senhaDigitada.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return; 

    }

    abrirLogin()

});


function abrirLogin() {

    window.location.href = "../painel/painel.html"; 
    
}

const botaoCadastrar = document.getElementById("btnCadastrar");

// Executa a mudança de página ao clicar no texto
botaoCadastrar.addEventListener("click", () => {
    window.location.href = "../formulario/formulario.html"; 
});


