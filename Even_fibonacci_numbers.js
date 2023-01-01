// Even Fibonacci numbers

let num = 2;
let prev = 1;
let sum = 0;

while (num <= 4000000) {
  if (num % 2 == 0) {
    sum += num;
  }

  let thisNum = num;
  num += prev;
  prev = thisNum;
}

console.log(`sum = ${Number(sum)}`);
