/*
    2 - 0
   / \
  1 - 3
*/

//! Edge List
const graphE = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//? Adjacent List (Con cual conecta cada valor, es decir, el 0 con el 2, el 1 con el 2 y 3.. etc)
//       0    1       2          3
const graphA = [[2], [2, 3], [0, 1, 3], [1, 2]];

const graphB = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

//* Adjacent Matrix marca un booleano en caso de que tenga una conexion con uno de los valores en orden.
//* 0, 1, 2, 3... el 0 tiene conexion con el 2 entonces el 3er 0 pasa a true y quedaria 0, 0, 1, 0
const graphM = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

const graphN = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};

//! Edge List: Te dice por medio de pares, quiénes son esos nodos que tienen conexión entre sí, es como si los juntáramos diciendo “este con este, este con este y este con este”, lo normal cuando pareamos cosas.

//? Adjacent List: Te dice qué elementos conoce a cuáles, para ponerlo en contexto, imagina a las personas que tu conoces, tú conoces a “n” cantidad de personas, pues básicamente esa sería tu primer índice del arreglo en un adjancent list, pero ten en cuenta que todas esas personas que tú conoces también conocen a otras personas, de entre ellas tú, así que esa sería tu segunda posición del arreglo, todas las personas que otra persona conoce.

//* Adjancent Matrix: Esto es un poquito más de imaginación, el Adjancent Matrix te pone a todas las personas que existen en una lista y te empieza a preguntar: ¿Conoces a esta persona? Si sí entonces la pone en 1, si no entonces la pone en 0, y así por cada persona que exista, cada índice representa a una persona, por eso digo que necesitas imaginartelas.
