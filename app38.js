let playerLevels = [15, 22, 9, 45, 18, 50];
let proPlayers = playerLevels.filter( (level) => {
    return level >= 20;
});
console.log(proPlayers);