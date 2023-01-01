function squaresDifference(num) {
  let squares = 0;
  let sum = 0;


  for (let i = 1; i <= num; i++) {
    sum += i
    squares += i ** 2
  }

  return `difference = ${sum ** 2 - squares}`
}


console.log(squaresDifference(100))