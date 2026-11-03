for( let  i = 1; i <= 4;  i++){
    let row = ""; 

    for(let space = 1; space <= 4 - i; space++){
        row = row + " ";
    }
    for(let j = 1; j <= i; j++){
        row = row + "* ";
    }
    console.log(row);
}

for(let i =3; i >= 1; i--){
    let row = "";
    
    for(let space = 1; space <= 4 - i; space++){
        row = row + " "; 
    }
    for(let j = 1; j <= i; j++){
        row = row + "* ";
    }
    console.log(row);
}