// Vai criar uma função para o formulario 
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) { 

    // Evita que a página recarregue antes de mostrar os alertas 
    event.preventDefault(); 
    
    // Tá puxando o id do html "form" que foi definido
    const emailDigitado = document.getElementById('email').value.trim(); 
    const senhaDigitada = document.getElementById('senha').value; 

    //vai verificar se tem @gmail ou hotmail 
    if (emailDigitado.includes("@gmail.com") || emailDigitado.includes("@hotmail.com")) { 
    } else { 
        alert("E-mail inválido! Verifique "); 
        return; 
    } // length esta contando os caracteres 
    if (senhaDigitada.length < 8) { 
        alert("A senha deve ter pelo menos 8 caracteres."); 
        return; 
    } 

    abrirLogin() 
}); 

function abrirLogin() { 
    window.location.href = "../login/index.html"; 
}


function voltarLogin() {
    window.location.href = "../login/index.html"; 
}
