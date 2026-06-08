const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function seventies() {
  bornInSeventies = []
  entrepreneurs.forEach(entrepreneur => {
    if (entrepreneur.year >= 1970 && entrepreneur.year < 1980){
    bornInSeventies.push(entrepreneur);
  };
  });
  bornInSeventies.forEach(entrepreneur => console.log(entrepreneur));
}

function names() {
  names = [];
  entrepreneurs.forEach(entrepreneur => names.push(entrepreneur.first + " " + entrepreneur.last));
  names.forEach(entrepreneur => console.log(entrepreneur));
}

function calculate_age(entrepreneur) {
  age = new Date().getFullYear() - entrepreneur.year 
  return age
}

function ages() {
  entrepreneurs.forEach(entrepreneur => console.log(entrepreneur.first + " " + entrepreneur.last + " aurait " + calculate_age(entrepreneur) + " ans aujourd'hui"));
}

function sort_names() {
  console.log("Voici la liste des entrepreneurs classés par leur nom dans l'ordre alphabétique :")
  console.log(entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)));
}

seventies();
names();
ages();
sort_names();