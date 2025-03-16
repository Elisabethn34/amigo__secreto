const amigos = []; 
function adicionarAmigo() {
    const inputNome = document.getElementById("amigo"); 
    const nome = inputNome.value.trim(); 

    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome); 

        atualizarLista();
        console.log(amigos); 
        inputNome.value = ""; 
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); 
    listaAmigos.innerHTML = ""; 
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado"); 
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sorteio.";
    } else {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `Amigo sorteado: ${amigos[indiceSorteado]}`;
    }
}