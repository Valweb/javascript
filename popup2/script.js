window.onload = init;

function init() {
  
  var a = 
    parseInt(prompt('Digite o primeiro número:'));

  var b =
    parseInt(prompt('Digite o segundo número:'));
    
  var mensagem =
    'a + b = ' + (a + b) + '\n' +
    'a - b = ' + (a - b) + '\n' +
    'a x b = ' + (a * b) + '\n' +
    'a / b = ' + (a / b) ;
    
  alert(mensagem);  
}