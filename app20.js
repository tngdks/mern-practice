for(let i = 1; i <= 4; i++){
    let row = "";
    for ( let j = 1; j <= i; j++){
        if ( j === 1 || i === 4 || j === i){
            row = row + "* ";
        } else {
            row = row + "  ";
        }
    }
    console.log(row);
}