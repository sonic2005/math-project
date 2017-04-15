/*let primes = [2];
let isPrime = [false, false, true];
function searchPrimes(number) {
  let isPrime_length = isPrime.length;
  while (isPrime.length <= number) {
    if (isPrime.length % 2 === 0) {
      isPrime.push(false);
    } else {
      isPrime.push(true);
    };
  };
  for (let i = isPrime_length; i <= number; i += 2) {
    if (isPrime[i]) {
      for (let j = Math.pow(i, 2); j <= number; j += i * 2) {
        isPrime[j] = false;
      };
      primes.push(i);
    };
  };
  /*for (let i = Math.pow(number, 2); i < ; i += 2) {
    if (primes[i]) {
      primes.push(i);
    };
  };*/

/*function primeFactorization(number) {
  searchPrimes(Math.floor(Math.sqrt(number)));
  let _number = number;
  let result = [];
  for (let i = 0; primes[i] <= Math.sqrt(_number); i ++) {
    if (number % primes[i] === 0) {
      number /= primes[i];
      result[i] = 1;
      while(number % primes[i] === 0) {
        number /= primes[i];
        result[i] ++;
      };
    } else {
      result[i] = 0;
    };
  };
  if (number !== 1) {
    result.push(1);
  };
  while (result[result.length - 1] === 0) {
    result.pop();
  };
  return result;
};

function GCD(number1, number2) {
  let result0 = 1;
  //pfr = primeFactorization Results
  let pfr1 = primeFactorization(number1);
  let pfr2 = primeFactorization(number2);
  for(let i = 0; i < Math.min(pfr1.length, pfr2.length); i ++) {
    result0 *= Math.pow(primes[i], (pfr1[i] > pfr2[i] ? pfr2[i] : pfr1[i]));
  };
  return result0;
};

console.log(GCD(10, 30));*/





/*function searchPrimes(num) {
  let prime = Math.floor(Math.sqrt(num))

}

searchPrimes(10)*/

/*function getPrimes(max) {
    let isPrime = [], i, j
    let primes = [];
    for (i = 2; i <= max; i++) {
        if (!isPrime[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                isPrime[j] = true;
            }
        }
    }
    console.log(primes);
}

getPrimes(100)*/


function isPrime(num) {
    if (num < 2){
      return false;
    }
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
          return false;
        }
    }
    return true;
}

/*for(var i = 0; i <= 79; i++){
    if(isPrime(i)) console.log(i);
}*/

function primeList(num) {
  let list = []
  for(var i = 0; i <= num; i++){
      if(isPrime(i)){
        list.push(i);
      }
  }
  console.log(list)
}

function isitPrime(num) {
  if (isPrime(num)) {
    console.log("It's a prime number.")
  } else {
    console.log("It's not a prime number.")
  }
}
