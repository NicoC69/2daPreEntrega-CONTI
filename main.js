let items = [];

function agregarItemsConPrompt() {
    let continuar = true;

    while (continuar) {
        const item = prompt("Ingresa un ítem para tu lista de supermercado (deja en blanco y presiona 'Aceptar' para finalizar):");
        
        if (item === null || item.trim() === "") {
            continuar = false;
        } else {
            items.push(item.trim());
        }
    }
    mostrarLista();
}

function mostrarLista() {
    const listaSupermercado = document.getElementById('listaSupermercado');
    listaSupermercado.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaSupermercado.appendChild(li);
    });
}

function limpiarLista() {
    items = [];
    const listaSupermercado = document.getElementById('listaSupermercado');
    listaSupermercado.innerHTML = '';
}