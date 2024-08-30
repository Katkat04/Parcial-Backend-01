/*
Parcial 1 - Katy Diaz 
*/
const datos = require("./datos.json");
/*
  Para correr este archivo, utilicen el comando
  $ node parcial1.js

  Para abrir el terminal desde la ubicacion de este folder, usen Ctrl + Shift + C.

  La variable importada "datos" contiene datos de estudiantes.
*/

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne la cantidad de estudiantes en matricula condicional
 * (promedio por debajo de 3.3).
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoUno(estudiantes) {
  function cPromedio(cursos) {
    let totalNotas = cursos.reduce((acumulador, curso) => acumulador + curso.nota, 0)
    return totalNotas / cursos.length
  }
  let eCondicionales = estudiantes.filter(estudiante => {
    let promedio = cPromedio(estudiante.cursos)
    return promedio < 3.3
  })
return eCondicionales.length
}
puntoUno(estudiantes)

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con el nombre completo de cada estudiante.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoDos(estudiantes) {
  let nombre = estudiantes.map(estudiante => estudiante.nombre)
  let apellido = estudiantes.map(estudiante => estudiante.apellido)
  lnombrecompleto = []
  for (index in estudiantes) {
     lnombrecompleto.push(estudiantes[index] ["nombre"] + " " + estudiantes[index] ["apellido"]) 
  }
  return lnombrecompleto
}
puntoDos(estudiantes)

/**
 * Implemente una funcion que reciba los datos de estudiantes y
 * retorne una lista con los id de cada estudiante unicamente, y tras
 * ser ordenados ascendentemente por altura.
 *
 * Los 'estudiantes' vienen del archivo 'datos.json', que ya fue importado para ustedes.
 */
function puntoTres(estudiantes) {
    estudiantes.sort((a, b) => a.altura - b.altura )
    let idsOrdenados = estudiantes.map(estudiante => estudiante._id)
    return idsOrdenados
}
puntoTres(estudiantes)

/**
 * Implemente una funcion que reciba una lista de numeros y
 * retorne el promedio de la lista.
 */
let numeros = [2,5,7,9,20,40,83,75,21,8,71]
function puntoCuatro(numeros) {
  let sum = 0
  let contador= 0
  for (let index = 0; index < numeros.length; index++) {
    prom = numeros[index]
    sum= prom + sum 
    contador++
  }
  return sum/contador;
}
puntoCuatro(lista)

/**
 * Implemente una funcion que reciba una palabra y retorne si
 *  la palabra es palindroma o no.
 */
function puntoCinco(palabra) {
  let lpalabra = palabra.length
  for (let index = 0; index < lpalabra / 2; index++) {
      if (palabra[index] !== palabra[lpalabra - 1 - index]) {
          return false
      }
  }
  return true
}
puntoCinco(palabra)

/**
 * Implemente una funcion que reciba una palabra y la invierta.
 */
function puntoSeis(palabra) {
  let lpalabra = palabra.length 
    let pinvertida = ""
    for (let index = lpalabra-1; index >= 0; index--) {
      pinver += palabra[index]
    }
    return pinvertida;
}
puntoSeis(palabra)

/**
 * Implemente una funcion que reciba una lista de objetos cualquiera
 * y un parametro y retorne la lista de objetos ordenada ascendemente
 * segun el valor del parametro.
 */
function puntoSiete(){

}

module.exports = {
  puntoUno,
  puntoDos,
  puntoTres,
  puntoCuatro,
  puntoCinco,
  puntoSeis,
  puntoSiete,
};
