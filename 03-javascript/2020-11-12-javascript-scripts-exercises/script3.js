function drawPyramid() {
  num = prompt("Combien d'étages pour la pyramide ?");
  i = 1; 
  while(num > 0) {
    step = " ".repeat(num - 1) + "#".repeat(i);
    num--;
    i++;
    console.log(step);
  }
} 
drawPyramid();