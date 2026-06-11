// função para mostrar dica aleatória
function saudarUsuario() {
    const dicas = [
        "Beba pelo menos 3 litros de água hoje!",
        "Mantenha a postura correta nos exercícios!",
        "O descanso é tão importante quano o treino!",
        "Consuma proteínas após o treino."
    ];

    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").value = dicas[indice];
}
