const sumOfYourNumber = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumOfYourNumber(2));
