// Generar elección aleatoria para la computadora
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // 0, 1 o 2
    return choices[randomIndex];
};

const computerChoice = getComputerChoice();
console.log("Computadora eligió:", computerChoice);

// Pedir la elección del usuario
const getHumanChoice = prompt("Elige: rock, paper o scissors").toLowerCase();
console.log("Tú elegiste:", getHumanChoice);

// Comparar ambas elecciones
if (computerChoice === getHumanChoice) {
    alert("¡Tie!"); // Empate
} else if (computerChoice === "rock" && getHumanChoice === "paper") {
    alert("You win!"); // Papel gana a roca
} else if (computerChoice === "rock" && getHumanChoice === "scissors") {
    alert("You lose!"); // Roca gana a tijeras
} else if (computerChoice === "paper" && getHumanChoice === "rock") {
    alert("You lose!"); // Papel gana a roca
} else if (computerChoice === "paper" && getHumanChoice === "scissors") {
    alert("You win!"); // Tijeras gana a papel
} else if (computerChoice === "scissors" && getHumanChoice === "rock") {
    alert("You win!"); // Roca gana a tijeras
} else if (computerChoice === "scissors" && getHumanChoice === "paper") {
    alert("You lose!"); // Tijeras gana a papel
} else {
    alert("Entrada no válida, intenta de nuevo."); // En caso de que el usuario ingrese otra cosa
}