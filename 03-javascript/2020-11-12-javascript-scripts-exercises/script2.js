function factorialOf() {
  num = prompt("De quel nombre veux-tu calculer la factorielle ?");
  factorial = 1;
  for(i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log(factorial);
}

factorialOf();