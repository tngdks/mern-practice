function canPlayRanked(level, reputation){
    if(level >= 20 && reputation >= 80){
        return "Ready for Ranked!";
    } else {
        return "Play Classic First!";
    }
}

let player1 = canPlayRanked(25, 90);
let player2 = canPlayRanked(12, 100);

console.log(player1);
console.log(player2);