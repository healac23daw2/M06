let opciones = ["pedra", "paper", "tisora"];
let partidasGanadas = 0;
let partidasPerdidas = 0;
let victoriasJugador = 0;
let victoriasOrdenador = 0;
let empates = 0;

function NovaJugada() {
    // Obtener la opción seleccionada por el usuario;
    let opcioPedra = document.getElementById("pedra");
    let opcioPaper = document.getElementById("paper");
    let opcioTisora = document.getElementById("tisora");
    let resultadoJugador = "";

    // Verificar cual está seleccionado y obtener su valor.
    if(opcioPedra.checked){
        resultadoJugador += opcioPedra.value;
    } else if(opcioPaper.checked) {
        resultadoJugador += opcioPaper.value;
    } else if(opcioTisora.checked){
        resultadoJugador += opcioTisora.value;
    } else {
        alert("No has seleccionat cap opció");
    }

    // Obtener opción aleatoria del ordenador
    let seleccioOrdinador = opciones[Math.floor(Math.random() * 3)];
    let mostrarResultatGlobal = document.getElementById("mostrarResultatGlobal");

    if(resultadoJugador === "pedra" && seleccioOrdinador === "pedra" || resultadoJugador === "paper" && seleccioOrdinador === "paper" || resultadoJugador === "tisora" && seleccioOrdinador === "tisora"){
        mostrarResultatGlobal.innerHTML = "Has empatat";
        empates++;
    } else if(resultadoJugador === "tisora" && seleccioOrdinador === "paper" || resultadoJugador === "paper" && seleccioOrdinador === "piedra" || resultadoJugador === "tisora" && seleccioOrdinador === "paper"){
        mostrarResultatGlobal.innerHTML = "Has guanyat";
        victoriasJugador++;
    } else if( !(resultadoJugador === "tisora" && seleccioOrdinador === "paper" || resultadoJugador === "paper" && seleccioOrdinador === "piedra" || resultadoJugador === "tisora" && seleccioOrdinador === "paper")) {
        mostrarResultatGlobal.innerHTML = "Has perdut";
        victoriasOrdenador++;
    }

    let mostrarResultat  = document.getElementById("mostrarResultat");
    mostrarResultat.innerHTML = `Resultat jugador: ${resultadoJugador}<br>Resultat Ordinador: ${seleccioOrdinador}`;

    let mostrarVictoriasJugador = document.getElementById("ganadas");
    mostrarVictoriasJugador.innerHTML = victoriasJugador;

    let partidesPerdudes = document.getElementById("perdidas");
    partidesPerdudes.innerHTML = victoriasOrdenador;

    let partidesEmpatades = document.getElementById("empatadas");
    partidesEmpatades.innerHTML = empates;
}

function EsborrarResultat() {
    document.getElementById("mostrarResultat").textContent = "";
}

Inicialitzacompatadors = () => {
    victoriasJugador = 0;
    victoriasOrdenador = 0;
    empates = 0;

    let mostrarVictoriasJugador = document.getElementById("ganadas");
    mostrarVictoriasJugador.innerHTML = victoriasJugador;

    let partidesPerdudes = document.getElementById("perdidas");
    partidesPerdudes.innerHTML = victoriasOrdenador;

    let partidesEmpatades = document.getElementById("empatadas");
    partidesEmpatades.innerHTML = empates;
}

Esborrarselecció = () => {

    let opcioPedra = document.getElementById("pedra");
    let opcioPaper = document.getElementById("paper");
    let opcioTisora = document.getElementById("tisora");

    if(opcioPedra.checked){
        opcioPedra.checked = false;
    } else if(opcioPaper.checked){
        opcioPaper.checked = false;
    } else {
        opcioTisora.checked = false;
    }
}