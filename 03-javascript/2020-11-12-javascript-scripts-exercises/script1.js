function sayHello() {
  console.log("Hello world " + askName() + "!");
}

function askName() {
  name = prompt("What is your name ?")
  return name
}

sayHello()