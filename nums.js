let matriz = [
    [3, 5, 9],
    [1, 4, 7],
    [8, 2, 6]
];

let vector = []

let numMayorFilaUno = 0;
let numMayorFilaDos = 0;
let numMayorFilaTres = 0;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length ; j++){
        if(i === 0){
           if(matriz[i][j] > numMayorFilaUno){
            numMayorFilaUno = matriz[i][j]
           }
        }

        if(i === 1){
            if(matriz[i][j] > numMayorFilaDos){
             numMayorFilaDos = matriz[i][j]
            }
         }

         if(i === 2){
            if(matriz[i][j] > numMayorFilaTres){
             numMayorFilaTres = matriz[i][j]
            }
         }
    }
}

vector.push(numMayorFilaUno)
vector.push(numMayorFilaDos)
vector.push(numMayorFilaTres)



console.log(vector);




