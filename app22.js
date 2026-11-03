function createDiamond(size){

for(let i = 1; i <= size; i++){
    let row ="";

    for(let space = 1; space <= size - i; space++){
        row = row + " ";
    }

    for(let j = 1; j <= i; j++){
        row = row + "* ";
    }
    console.log(row);
}

for(let i = size - 1; i >= 1; i--){
    let row = "";

    for( let space = 1; space <= size - i; space++){
        row = row + " ";
    }

    for( let j = 1; j <= i; j++){
        row = row + "* ";
    }
    console.log(row);
}
}

createDiamond(5);