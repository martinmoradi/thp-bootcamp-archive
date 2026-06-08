
// --------------------------- 1 ------------------------ //

function oneAndOneBis() {
  let footerElement = document.getElementsByTagName('footer')[0];
  footerElement.addEventListener('click', clickInConsole);
  clickCounter = 1;
};

function clickInConsole() {
  console.log("Clic numéro " + clickCounter);
  clickCounter++;
};


// --------------------------- 2 ------------------------ //

function two() {
  var navbarButton = document.getElementsByTagName("button")[0];
  navbarButton.addEventListener('click', toggleNavbar);
  
};

function toggleNavbar() {
  document.getElementById('navbarHeader').classList.toggle('collapse');
};

// --------------------------- 3 ------------------------ //

function three() {
  let editButtonFirstCard = document.querySelector('div.card:first-child button:nth-child(2)');
  editButtonFirstCard.addEventListener('click', changeColorToRed);

  function changeColorToRed() { 
    editButtonFirstCard.style.color = '#FF0000';
  };

};


// --------------------------- 4 ------------------------ //

function four() {
  let SecondCard = document.querySelectorAll('div.card')[1];
  let editButtonSecondCard = SecondCard.getElementsByTagName('button')[1];
  editButtonSecondCard.addEventListener('click', changeColorToggle);

  function changeColorToggle() {
    if(editButtonSecondCard.style.color === 'green') {
      editButtonSecondCard.style.color = '';
    } else {
      editButtonSecondCard.style.color = 'green';
    };
  };

};

// --------------------------- 5 ------------------------ //

function five() {
  let navbar = document.querySelector('div.navbar');
  console.log(navbar);
  navbar.addEventListener('dblclick', toggleBootstrap);

  function toggleBootstrap() {
    if(!document.styleSheets.item(0).disabled === true) {
     void(document.styleSheets.item(0).disabled=true);
  } else {
    void(document.styleSheets.item(0).disabled=false);
  };
};

};

// --------------------------- 6 ------------------------ //

function six() {
  let btnView = document.querySelectorAll('.btn-success');
  let cardsText = document.querySelectorAll('.card-text');
  let cardsImage = document.querySelectorAll('.card-img-top');

  for (let i = 0; i < btnView.length; i++) { 
    btnView[i].addEventListener('mouseover', function(){
    if (cardsText[i].style.display !== 'none') {
      cardsText[i].style.display = 'none';
      cardsImage[i].style.width = '20%';
    } else {
      cardsText[i].style.display = '';
      cardsImage[i].style.width = '';
    };
    });
  };  

};

// --------------------------- 7 ------------------------ //

function seven() {
  let cards = document.querySelectorAll('div.col-md-4');
  let rightBtn = document.querySelector('a.btn.btn-secondary.my-2');
  let parent = document.querySelectorAll('.row')[1];
  rightBtn.addEventListener('click', function() {
   let cardMove = document.querySelectorAll('.col-md-4')[5]
    parent.prepend(cardMove); 
  });
};

// --------------------------- 8 ------------------------ //

function eight() {
  let cards = document.querySelectorAll('div.col-md-4');
  let leftBtn = document.querySelector("a.btn.btn-primary.my-2");
  let parent = document.querySelectorAll('.row')[1];
  leftBtn.addEventListener('click', function(e){
    e.preventDefault();
    let cardMove = document.querySelectorAll('.col-md-4')[0];
    parent.append(cardMove); 
  });
};

// --------------------------- 9 ------------------------ //

function nine() {
  logo = document.querySelector("div.navbar.navbar-dark.bg-dark.box-shadow > div > a");
  body = document.querySelector("body");
 
    logo.addEventListener('keydown', event => {
      if (event.keyCode === 65) { // A 
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");
        body.classList.add("col-4");
      } else if(event.keyCode === 89 ) { // Y 
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");       
        body.classList.add("col-4");
        body.classList.add("offset-md-4");
      } else if (event.keyCode === 80) { // P
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");
        body.classList.add("col-4");
        body.classList.add("offset-md-8");
      } else if (event.keyCode === 66) { // B
        body.classList.remove("col-4");
        body.classList.remove("offset-md-4");
        body.classList.remove("offset-md-8");
      };      
    }); 
};

// ----------------------- PERFORM ----------------------- //

oneAndOneBis();
two();
three();
four();
five();
six();
seven();
eight();
nine();