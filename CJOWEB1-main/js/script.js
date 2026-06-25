// função para mostrar dica aleatória
function mostrarDica() {
    const dicas = [
        "Beba pelo menos 3 litros de água hoje!",
        "Mantenha a postura correta nos exercícios!",
        "O descanso é tão importante quanto o treino!",
        "Consuma proteínas após o treino."
    ];

    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").value = dicas[indice];
    const inputDica = document.getElementById("dica");
    inputDica.style.display = "block";
}

//Função elemento 'range' estilo de treino
let range = document.getElementById("range");
let nivel = document.getElementById("nivel");

function atualizarNivel() {
    let valor = Number(range.value);

    if (valor <= 3) {
        nivel.textContent = valor + " = treino fofo 🥹";
    } else if (valor <= 7) {
        nivel.textContent = valor + " = saudável 😃";
    } else {
        nivel.textContent = valor + " = fortão 💪";
    }
}


atualizarNivel();

console.log("script carregaodo com sucesso!");