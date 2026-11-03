const calculateDamage = (baseDamage, headshotMultiplier) => {
    return baseDamage * headshotMultiplier;
}
let totalDamage = calculateDamage(40, 2);
console.log(totalDamage);
