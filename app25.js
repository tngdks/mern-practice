function uploadShort(fileSize, durationSeconds) {
    if( fileSize === 0 ){
        return "Error: File is Empty!";
    }
    if(durationSeconds > 60) {
        return "Error: Video too long for Shorts!";
    }
    return "Short uploaded successfully!";
}
let short1 = uploadShort(0, 30);
let short2 = uploadShort(50, 75);
let short3 = uploadShort(30, 45);
console.log(short1);
console.log(short2);
console.log(short3);