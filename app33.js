let backpack = ["Medkit", "Ammo", "Grenade", "Energy Drink"];
let hasSmoke = backpack.includes("Smoke");
console.log(hasSmoke);
let grenadeIndex = backpack.indexOf("Grenade");
console.log(grenadeIndex);
backpack.splice(2,1);
console.log(backpack);