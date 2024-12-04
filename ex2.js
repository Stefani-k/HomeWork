function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true;
}

const limit = 237;

for (let i = 2; i < limit; i++) {
  if (isPrime(i)) {
    console.log(i); 
  }
}
