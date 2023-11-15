function countPrimeNumbers() {
    let counter = 0, numerator, denominator;

    for (numerator = 2; numerator <= 100; numerator++) {
        let prime = true;
        for (denominator = 2; denominator < numerator; denominator++) {
            if (numerator % denominator == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            counter++;
        }
    }
    console.log(counter);
    return counter;
}

let start = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

let end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`)