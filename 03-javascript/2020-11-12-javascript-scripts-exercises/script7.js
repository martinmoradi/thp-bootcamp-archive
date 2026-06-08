function acne_bot() {
  let user_params = prompt("L'adolescent écoute en feignant l'indifférence...")
  if(user_params.endsWith("?"))
    console.log("Ouais Ouais...");
  else if(isUpperCase(user_params) && user_params !== "")
    console.log("Pwa, calme-toi...");
  else if(user_params.includes("Fortnite"))
    console.log("on s' fait une partie soum-soum ?");
  else if(user_params === "")
    console.log("t'es en PLS ?");
  else 
    console.log("balek");  
}


function isUpperCase(str) {   
    return str === str.toUpperCase();
}

acne_bot();