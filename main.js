const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

function getExcuse() {
    const when = ["Hace dos días", "Mientras yo estaba en el baño", "En un abrir y cerrar de ojos", "Durante el concierto de Camela", "Justo cuando acabé mis deberes,"];
    const who = ["un alien", "mi perro", "fulanito de tal", "mi primo el del pueblo", "un duende pequeño"];
    const action = ["se comió", "me destrozó", "me prendió fuego", "me robó", "me escondió"];
    const what = ["mi cuaderno", "mi mochila", "mi Macbook", "mis gafas", "mi boli de la suerte"];
    
    
    return `${getRandomElement(when)} ${getRandomElement(who)} ${getRandomElement(action)} ${getRandomElement(what)}.`;
}

window.onload = function() {
    const myExcuse = document.getElementById("excuse");
    myExcuse.textContent = getExcuse();
};