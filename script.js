// script.js

// 1. Seleccionar todos los elementos necesarios del HTML
const campoNum1 = document.getElementById('num1');
const campoNum2 = document.getElementById('num2');
const botonSumar = document.getElementById('btn-sumar');
const elementoResultado = document.getElementById('resultado');


// 2. Definir la función que realiza la suma y actualiza la página
function realizarSuma() {
    
    // a. Leer los valores de los campos de entrada usando .value
    let valor1 = campoNum1.value;
    let valor2 = campoNum2.value;
    
    // b. ¡CRUCIAL EN JAVASCRIPT! Convertir los valores a números.
    // Los .value de los <input> siempre se leen como TEXTO (string).
    // Usamos parseFloat() para convertirlos a números decimales (o enteros).
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);
    
    // c. Realizar la operación matemática
    const sumaTotal = numero1 + numero2;
    
    // d. Mostrar el resultado en el elemento de salida usando .textContent
    // El resultado final se convierte automáticamente a texto para mostrarse.
    elementoResultado.textContent = sumaTotal;
    
    // Opcional: Mostrar en consola
    console.log(`Sumando ${numero1} + ${numero2} = ${sumaTotal}`);
}


// 3. Asignar la función al evento 'click' del botón
botonSumar.addEventListener('click', realizarSuma);
