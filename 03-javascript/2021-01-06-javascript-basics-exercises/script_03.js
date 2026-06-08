const users = require('./users.js')

// Quel est le chiffre d'affaires moyen par utilisateur ?

const revenues = users.map(user => user.revenue)
const sumRevenues = revenues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
// Pour round à 2 decimals
const averageSalesPerUser = (Math.round(((sumRevenues / 100 / users.length) + Number.EPSILON) * 100) / 100);
console.log(`Le chiffre d'affaire moyen par utilisateur est de ${averageSalesPerUser}€`)

// Quel est le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue supérieur à 0) ?

const positiveRevenue = revenues.filter(revenue => revenue > 0)
const percentPositiveRevenue = (Math.round(((positiveRevenue.length * 100 / revenues.length) + Number.EPSILON) * 100) / 100);
console.log(`Le pourcentage d'utilisateur ayant rapporté de l'argent est de ${percentPositiveRevenue}%`)

// Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?
const averageSalesPerClient = (Math.round(((sumRevenues / 100 / positiveRevenue.length) + Number.EPSILON) * 100) / 100);
console.log(`Le chiffre d'affaire moyen par client est de ${averageSalesPerClient}€`)

// Combien avons-nous gagné d'argent au total ?
console.log(`Nous avons gagné ${sumRevenues / 100}€ au total`)

// Combien avons-nous d'utilisateurs en France ?
const usersFromFrance = users.filter(user => user.country === "France")
console.log(`Nous avons ${usersFromFrance.length} utilisateurs en France`)

// Parmi ces utilisateurs, combien avons-nous de clients payants en France ?
const clientsFromFrance = usersFromFrance.filter(user => user.revenue > 0)
console.log(`Nous avons ${clientsFromFrance.length} clients en France`);

// Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande-Bretagne) (chiffre d'affaires total, en France, aux États-Unis, etc.)
const franceRevenues = clientsFromFrance.map(user => user.revenue)
const sumFranceRevenues = franceRevenues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(`Le chiffre d'affaire en France est de ${sumFranceRevenues / 100}€`)
const usersFromGermany = users.filter(user => user.country === "Germany")
const germanyRevenues = usersFromGermany.map(user => user.revenue)
const sumGermanyRevenues = germanyRevenues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(`Le chiffre d'affaire en Allemagne est de ${sumGermanyRevenues / 100}€`);
const usersFromUS = users.filter(user => user.country === "United States")
const USRevenues = usersFromUS.map(user => user.revenue)
const sumUSRevenues = USRevenues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(`Le chiffre d'affaire aux US est de ${sumUSRevenues / 100}€`);
const usersFromGB = users.filter((user) => user.country === "Great Britain");
const GBRevenues = usersFromGB.map((user) => user.revenue);
const sumGBRevenues = GBRevenues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(`Le chiffre d'affaire en Grande Bretagne est de ${sumGBRevenues / 100}€`);
console.log(`La somme du CA dans les 4 pays les plus représentés est de ${(sumGBRevenues + sumFranceRevenues + sumGermanyRevenues + sumUSRevenues) / 100}€`)

// Quels sont les 5 utilisateurs qui nous ont rapporté le plus d'agent ?

console.log(users.sort((a, b) => (a.revenue < b.revenue ? 1 : -1)).splice(0, 4));

// Gagnons-nous plus d'argent auprès des hommes, ou des femmes ?

const menUsers = users.filter(user => user.sex === "M")
const menRevenues = menUsers.map((user) => user.revenue);
const sumMenRevenues = menRevenues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
const femaleUsers = users.filter((user) => user.sex === "M");
const femaleRevenues = femaleUsers.map((user) => user.revenue);
const sumFemaleRevenues = femaleRevenues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
const maleOrFemale = (sumMenRevenues > sumFemaleRevenues ? "Hommes" : "Femmes")
console.log(`Nous gagnons plus d'argent auprès des ${maleOrFemale}`)

// Sors-moi les utilisateurs ayant rapporté au moins 75€

const bestClients = users.filter(user => user.revenue >= 7500)
console.log(bestClients)

// Parmi nos 100 premiers utilisateurs, quel est le pourcentage qui sont des clients payants ?

const firstUsersPositiveRevenue = users.splice(0, 99).filter(revenue => revenue > 0)
const firstUsersPercentPositiveRevenue = (Math.round(((firstUsersPositiveRevenue.length * 100 / 100) + Number.EPSILON) * 100) / 100);
console.log(`Le pourcentage d'utilisateur parmis les 100 premiers ayant rapporté de l'argent est de ${percentPositiveRevenue}%`)