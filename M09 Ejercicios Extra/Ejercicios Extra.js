/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   console.log(Object.entries(objeto))
   return Object.entries(objeto);
}

deObjetoAarray({D: 1, B: 2, C: 3})


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   for(var i=0; i<string.length; i++){
      if(!objeto[string[i]]){
         objeto[string[i]] = 0;
      } objeto[string[i]] += 1;
   }
   var objetoOrdenado = Object.keys(objeto).sort();
   console.log(objetoOrdenado)
   var objOrdenado = {};
   for(var i=0; i<objetoOrdenado.length; i++){
      objOrdenado[objetoOrdenado[i]] = objeto[objetoOrdenado[i]];
   }
   // console.log(objOrdenado)
   return objOrdenado;
}

numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var str1 = "";
   var str2 = "";

   for(i = 0; i<string.length; i++){
      if(string[i] == string[i].toUpperCase()){
         str1 = str1 + string[i];
      } else str2 = str2 + string[i];
   }
   return str1 + str2;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   // var fr = frase.split(" ");
   // console.log(fr)
   // var result = [];
   // for(var i = 0; i< fr.length; i++){
   //    result.push(fr[i].split("").reverse().join(""))
   // }
   // return result.join(" ");

   var arreglo = frase.split(" ");
   var arreglo1 = [];

   for(var i=0; i<arreglo.length; i++){
      var pushear = "";
      for(var j=arreglo[i].length -1; j>=0; j--){
         pushear += arreglo[i][j];
      }
      arreglo1.push(pushear);
   }
   return arreglo1.join(" ");
}

asAmirror("The Henry Challenge is close!")

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var letra = numero.toString()
   for(i = 0; i< letra.length; i++){
      for(j = letra.length-1; j>=0; i++){
         if(letra[i] == letra[j]) return "Es capicua";
         else return "No es capicua";
      }
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoSin = ""
   for(i=0; i< string.length; i++){
      if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         nuevoSin += string[i];
      }
   }
   return nuevoSin;

}
deleteAbc("abcdefg")

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arreglo = arrayOfStrings.sort(function(a, b){
      return a.length - b.length;
   });
   return arreglo;

}
sortArray(["You", "are", "beautiful", "looking"])

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = [];
   for(var i=0; i<array1.length; i++){
      for(var j=0; j<array2.length; j++){
         if(array1[i] == array2[j]) nuevoArreglo.push(array1[i]);
      }
   }
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
