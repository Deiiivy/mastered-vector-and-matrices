let matriz = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]
];

let sum = 0;
let numRowOne = 0;
let numRowTwo = 0;
let numRowThree = 0;


for(let i = 0; i < matriz.length; i++){
    for(let j  = 0; j < matriz[i].length; j++){
        if(i === 0) {
            numRowOne = matriz[i][j - 2]
        }
        if(i === 1) {
            numRowTwo = matriz[i][j - 1]
        }
        if(i === 2) {
            numRowThree = matriz[i][j]
        }
    }
}

sum += numRowOne + numRowTwo + numRowThree


console.log(sum);

