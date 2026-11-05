let squad = [
    { name: "Takao", kills: 8 },
    { name: "Shiven", kills: 2 },
    { name: "Kai", kills: 12 }
];
let mvpNames = squad
    .filter( (player) => { 
        return player.kills >= 5; 
    })
    .map( (player) => { 
        return player.name; 
    });

console.log(mvpNames);

