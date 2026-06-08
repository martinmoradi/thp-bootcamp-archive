// Écris une fonction itérative (qui fonctionne par itération et non par récursivité) qui retourne la valeur factorielle d'un nombre donné en paramètre.

const computeFactorialIt = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) result = result * i;
  return result;
};

// Maintenant, même enercice, mais en utilisant la récursivité !

const computeFactorialRec = (n) => {
  if (n === 0) return 1;
  else return n * computeFactorialRec(n - 1);
};

// Écris une fonction itérative qui retourne son premier argument à la puissance p, où p est le second argument. En cas d'erreur, la fonction doit retourner 0. Son prototype doit être comme tel :

const computePowerIt = (n, p) => {
  let result = 1;
  for (let i = 1; i <= p; i++) result *= n;
  return result;
};

const computePowerRec = (n, p) => {
  if (p === 0) return 1;
  else return n * computePowerRec(n, p - 1);
};

// Pour cet exercice, tu vas devoir écrire une fonction qui retourne la racine carrée d'un nombre.
// https://blogs.sas.com/content/iml/2016/05/16/babylonian-square-roots.html

const computeSquareRoot = (n, y) => {
  if (!y) {
    y = n / 2.0;
  }
  const guess = (n / y + y) / 2.0;
  console.log(guess)
  if (y === guess) return y;
  else return computeSquareRoot(n, guess);
};

// Dans cet exercice, tu vas devoir écrire une fonction qui retourne true si n est un nombre premier et false s'il ne l'est pas.
// Prime numbers are numbers that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.

const isPrimeNumber = (n, i) => {
  if (!i) {
    i = 2;
  }
  if (n <= 1) return false;
  else if (n === 2) return true;
  else if (n === i) return true;
  else if (n % i === 0) return false;
  i++;
  return isPrimeNumber(n, i);
};

// tu vas devoir écrire une fonction qui va retourner le plus petit nombre premier supérieur ou égal à n.

const findSupPrime = (n) => {
  if (isPrimeNumber(n)) return n;
  else return findSupPrime(n + 1);
};


// Écris une fonction qui retourne le nombre de possibilités de placer n reines sur un échiquier de taille nxn sans qu'elles soient capables de se manger entre elles en un seul mouvement.

// 1 reine par ligne, par colomne et par diagonale
const countValidQueens = (n) => {
 chessboard = new Array() 
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      chessboard.push([x, y, "available"])
    }
  }
  return chessboard
};
console.log(countValidQueens(4))