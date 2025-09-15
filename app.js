// El principal objetivo de este desafío es fortalecer tus 
// habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde guardaremos los nombres de los amigos
let amigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// 👉 Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    // Validar que no se excedan 10 nombres
    if (amigos.length >= 10) {
        alert("Solo puedes agregar hasta 10 amigos.");
        return;
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    mostrarLista();

    // Limpiar campo de texto
    inputAmigo.value = "";
    inputAmigo.focus();
}

// 👉 Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    // Limpiar lista antes de volver a dibujarla
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// 👉 Función para sortear un amigo
function sortearAmigo() {
    // Validar que existan amigos
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    // Mostrar resultado
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
