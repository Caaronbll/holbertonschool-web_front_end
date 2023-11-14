function countPrimeNumbers() {
    let primeCounter = 0;
    for (let i = 2; i <= 100; i++) {
        if (i % 2 != 0 && i % 3 != 0) {
            primeCounter += 1;
        };
    };
    return primeCounter;
};

const start = performance.now();
countPrimeNumbers();
const end = performance.now();