



function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        console.log( String(n % base));
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}

console.log(numberToString(13, 10))


try {
    
} catch (error) {
    
}
