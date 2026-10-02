%%html
<h2>Contador: <span id="contador">0</span></h2>
<button id="btnIncrementar">Incrementar</button>

<script>
// Estado inicial
let cuenta = 0;

// Referencias a los elementos del DOM
const boton = document.getElementById("btnIncrementar");
const salida = document.getElementById("contador");

// Definición del manejador de eventos
boton.addEventListener("click", function() {
cuenta++;
salida.textContent = cuenta;
});
</script>
