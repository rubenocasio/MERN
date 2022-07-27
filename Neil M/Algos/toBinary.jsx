const toBinary = (val) => {
    let remainder = 0;
    let temp = "";
    let binVal = "";
    while( val > 0 ) {
        remainder= val % 2;
        temp += remainder;
        val = Math.floor(val / 2);
    }
    for(var i = temp.length-1; i >= 0; i--) {
        binVal += temp[i];
    }
    return binVal;
}
console.log(toBinary(29));
console.log(toBinary(145));
console.log(toBinary(128));
