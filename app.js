let nombres =[];
let nombre = "";

function asignar_texto_elemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

function agregar_amigo() {
    nombre = document.querySelector("#amigo").value;
    if (nombre == "") {
        alert("Inserte un valor válido...")
    } else {
        nombres.push(nombre);
        limpiar_caja();
        asignar_texto_elemento("ul",nombres.join("<br>"));
    }
}

function limpiar_caja() {
    document.querySelector("#amigo").value = "";
};
