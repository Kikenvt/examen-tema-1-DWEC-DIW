/**@Autor: Enrique Fernández-Campoamor Fernández
 * @Github:
 */

// Añadimos el listener del evento "DOMContentLoaded" para esperar a que todo el DOM de la página esté cargado

document.addEventListener("DOMContentLoaded", () => {
  //Asignamos las variables a los elementos html por su Id
  const button = document.getElementById("calculateButton")
  const result = document.getElementById("result")

  // Creamos un listener de evento "click" en la variable button para que realice la arrow function al clickar en el button

  button.addEventListener("click", () => {
    //Recogemos los inputs y los pasamos a numeros float
    const length = parseFloat(document.getElementById("length").value)
    const width = parseFloat(document.getElementById("width").value)

    //Creamos una condición para verificar que son números y nos Strings

    if (!isNaN(length) && !isNaN(width)) {
      // Hacemos los cálculos de area, perimetro y diagonal y les agregamos el redondeo a dos decimales
      const area = (length * width).toFixed(2)

      const perimeter = (2 * length + 2 * width).toFixed(2)

      const diagonal = Math.pow((Math.pow(length, 2) + Math.pow(width, 2)), 0.5).toFixed(2)

      // Mostramos el resultado en el documento HTML
      result.innerHTML = `<p>Área del rectángulo: ${area}</p>
            <p>Perimetro del rectángulo: ${perimeter}</p>
            <p>Diagonal del rectángulo: ${diagonal}</p>`
    } else {
      // En el caso de que los inputs no sean corectos mostramos el siguiente resultado en el HTML
      result.innerHTML = `<p>Por favor ingrese valores correctos</p>`
    }
  })
})
