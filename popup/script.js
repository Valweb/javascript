window.onload = init;

function init() {
  
  var tempC = 
    parseFloat(prompt('Digite uma temperatura em graus Celsius:'));

  var temp10C =
    tempC = tempC * 1.1;
    
  var tempF = 32 + (1.8 * tempC);    
    
  var mensagem1 =
    'Temperatura acrescida de 10%: ' + tempC;
    
  var mensagem2 =
    'Temperatura em Fahrenheit: ' + tempF;
    
  alert(mensagem1); 
  alert(mensagem2);  
}