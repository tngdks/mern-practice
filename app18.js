for(let i = 1; i <= 4; i++){
    let row = "";
    for(let j = 1; j <= 4; j++){
        if( i === 1 || i === 4 || j === 1 || j === 4){
            row = row + "* ";
        } else {
            row = row + "  ";
        }
    }
    console.log(row);
}