// No cambies los nombres de las funciones.

function invocarCallback(cb) {
  // Invoca al callback `cb`
  // Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  // Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  // Devolver lo que retorne el ejecutar el callback pasándole como argumentos los números recibidos.
  // Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Tu código:
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    resultado = resultado + numeros[i];
  }
  cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre el array "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada elemento el arreglo)
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    cb(array[i]);
  }
}

// array.forEach(cb); // El forEach recorre el array (abreviacion de for (supongo).) debajo de ese array recorrido
// } // existe una funcion (casos anteriores eran variables) el nombre de dicha funcion (cb)
// es lo que le pasamos por parametro a forEach
//forEach lo que hace es que te devuelve los elementos del array 1x1 !!

function map(array, cb) {
  // Itera sobre cada elemento de "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  var nuevoarr = [];
  for (var i = 0; i < array.length; i++) {
    nuevoarr.push(cb(array[i]));
  }
  return nuevoarr;
}

// Este lo hice todo  pero me olvidaba del return (vi las respuestas)
// } // (dentro del cb esta value (el valor del array . ej [1,2,3] los values serian 0,1,2))
// esta index que es lo escrito dentro del array y esta array que es el array completo.
// y el map te devuelve un nuevo array con los nuevos resultados (podes dividir, multiplicar, etc)

function filter(array) {
  // Filtrar todos los elementos del array que comiencen con la letra "a".
  // Devolver un nuevo array con los elementos que cumplen la condición
  // Tu código:
  var nuevoarr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] === "a") {
      nuevoarr.push(array[i]);
    }
  }
  return nuevoarr;
}

// return array.filter((arr) => arr[0] === "a");
// filter lo que hace es que te filtra los elementos del array
//  depende de la condicion que le pongas
//}

// ---- Ejercicios de Repaso ----

function deObjetoArray(objeto) {
  // Escribe una función que convierta un objeto en un arreglo, donde cada elemento representa
  // un par clave-valor.
  // Ejemplo:
  /* objeto({
      D: 1,
      B: 2,
      C: 3
     }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  // Tu código:
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  // en formato par clave-valor.
  // Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var nuevoobj = {};
  for (var i = 0; i < string.length; i++) {
    if (nuevoobj[string[i]]) {
      nuevoobj[string[i]] = nuevoobj[string[i]] + 1; // aca estoy reasignando la propiedad
    } else {
      nuevoobj[string[i]] = 1; // aca la estamos creando
    }
  }
  return nuevoobj;
}

function capicua(numero) {
  // Escribe una función, la cual recibe un número y determina si es o no capicúa.
  // La misma debe retornar: "Es capicua" si el número se lee igual de
  // izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  // Tu código:
  var numastr = numero.toString().split("").reverse().join("");
  var numnuevo = parseInt(numastr);
  if (numero === numnuevo) {
    return "Es capicua";
  }
  return "No es capicua";
}
// se que Math.floor (7.2) significa que redondea para abajo, por mas que sea 7.9 , el resultado va a ser 7
// se que numero.toString() significa que el numero ej : 12321 lo pasamos a "12321"

function deleteAbc(cadena) {
  // Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  // y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  // Tu código:
  var nueva = "";
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      nueva = nueva + cadena[i];
    }
  }
  return nueva;
}

function buscoInterseccion(arreglo1, arreglo2) {
  // Existen dos arrays, cada uno con cierta cantidad de números. A partir de ello, escribir una función que permita
  // retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // Aclaración: los arreglos no necesariamente tienen la misma longitud
  // Tu código:
  var nuevoarr = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var k = 0; k < arreglo2.length; k++) {
      if (arreglo1[i] === arreglo2[k]) nuevoarr.push(arreglo1[i]);
    }
  }
  return nuevoarr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
  deObjetoArray,
  numberOfCharacters,
  capicua,
  deleteAbc,
  buscoInterseccion,
};
