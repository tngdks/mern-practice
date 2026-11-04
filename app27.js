const startStream = (internetSpeed, isMicOn) => {
    if(internetSpeed < 50) {
        return "Error: Internet too slow; "
    }

    if(isMicOn === false) {
        return "Error: Mic is muted!";
    }

    for(let i = 3; i >= 1; i--){
        console.log("Starting in " + i + "...");
    }

    return "Stream is LIVE!";
}

console.log(startStream(30, true));
console.log(startStream(100, true));