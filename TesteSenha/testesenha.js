window.onload = init;


	var qtdeTrue;
	var qtdeMaiusculas;
	var qtdeMinusculas;
	var qtdeSimbolos;
	var qtdeNumeros;
	var qtdeCaracteres;
	var tamanho = senha.length;
	var Aprovado; 
	var spnQtdAprovado=0;
	qtdeTrue=0

  

function init() {
	
  var edtSenha     = document.getElementById('novasenha');
  edtSenha.onkeyup = contar;
       
}

function contar() {
	
	qtdeMaiusculas = 0;
	qtdeMinusculas = 0;
	qtdeSimbolos = 0;
	qtdeNumeros = 0;
	qtdeCaracteres = 0;
	Aprovado = 0;
	spnQ.innerHTML = this.value.length;
	
	var edtSenha = document.getElementById('novasenha').value;

	qtdeCaracteres = edtSenha.length;
	
	for (var i = 0; i < edtSenha.length; i++) {
		
		var codigoAscii = edtSenha.charCodeAt(i);
		
		if ( (codigoAscii >= 65) && (codigoAscii <= 90)  ||
		    (codigoAscii >= 97) && (codigoAscii <= 122) ) {
		qtdeTrue+1
           if (edtSenha[i].toUpperCase() == edtSenha[i])
             qtdeMaiusculas++;
             
             
           else
             qtdeMinusculas++;			   
		}
		else {
			
			if (!isNaN(edtSenha[i]))
			  qtdeNumeros++;
		    else
			  qtdeSimbolos++;
		}
		
		
	}
	
	//Apresenta a senha digitada
	
			var span = document.getElementById('textseguranca');
			span.innerHTML =  " SenhaDigitada: " + edtSenha;
	
	//Apresenta a quantidade de caracteres no total
			if(qtdeCaracteres >=0)    {
			var elem = document.getElementById("spnT");
			spnT.innerHTML = "Quantidade Total de caracteres:"  + qtdeCaracteres+ " De 8 caracteres";
			if  (qtdeCaracteres >= 8){
		   elem.style.color ="green";
			}
			else
				elem.style.color ="red";
			}
				
	
	//Apresenta o resultados da quantidade dos tipos de caracteres
    
	if(qtdeMaiusculas >=1)    {
	    var elem = document.getElementById("spnU");
	    elem.style.color ="green";
		spnU.innerHTML = "Quantidade de caracteres Maiúsculas:"  + qtdeMaiusculas;
		
		}
				
					
    if(qtdeMinusculas >=1)    {
	    var elem = document.getElementById("spnL");
	    elem.style.color ="green";
		spnL.innerHTML = " Quantidade de caracteres Minusculos: " + qtdeMinusculas;
				
	}		

			
    if(qtdeNumeros >=1)    {
	    var elem = document.getElementById("spnN");
	    elem.style.color ="green";
		spnN.innerHTML = " Quantidade de Números: " + qtdeNumeros;
	}			
    if(qtdeSimbolos >=1)    {
	    var elem = document.getElementById("spnS");
	    elem.style.color ="green";
		spnS.innerHTML = " Quantidade de Símbolos: " + qtdeSimbolos;	  
	}	
	
	//Retorna cor e valores iniciais com o backespace
		
	 if(qtdeMaiusculas < 1)    {
	    var elem = document.getElementById("spnU");
	    elem.style.color ="Red";
		spnU.innerHTML = "Quantidade de caracteres Maiúsculas:"  + qtdeMaiusculas;
		}
		

	
    if(qtdeMinusculas < 1)    {
	    var elem = document.getElementById("spnL");
	    elem.style.color ="red";
		spnL.innerHTML = " Quantidade de caracteres Minusculos: " + qtdeMinusculas;
		
		
	}			
			
    if(qtdeNumeros < 1)    {
	    var elem = document.getElementById("spnN");
	    elem.style.color ="red";
		spnN.innerHTML = " Quantidade de Números: " + qtdeNumeros;
	}			
    if(qtdeSimbolos < 1)    {
	    var elem = document.getElementById("spnS");
	    elem.style.color ="red";
		spnS.innerHTML = " Quantidade de Símbolos: " + qtdeSimbolos;	  
	}	
	
 	
	
	// Incrementa contadores
	
    if(qtdeSimbolos >= 1){
      Aprovado+=1;
	      } 
    if(qtdeMaiusculas >= 1){
      Aprovado+=1;
    } 
    if(qtdeMinusculas >= 1){
      Aprovado+=1;
    } 
    if(qtdeNumeros >= 1){
      Aprovado+=1;
    }

 	
	//CheckBox - Se for >= 3 e tiver 8 caracteres aceitaveis
	var checkbox = document.getElementById('ok');
    checkbox.checked = (qtdeCaracteres >= 8) && (Aprovado>=3);
	 
  
	
	// Apresenta verde de quantidade de criterios for igual ou maior que 3
	
		if(Aprovado >= 1)    {
			var elem = document.getElementById("spnQ");
			spnQ.innerHTML = " Quantidade de critérios aprovado (acima de 3): " + Aprovado + " de 4";
		}	
		
		if(Aprovado >= 3)    {
			var elem = document.getElementById("spnQ");
			elem.style.color ="green";
			spnQ.innerHTML = " Quantidade de critérios aprovado (acima de 3): " + Aprovado + " de 4";
		}	
		
		
		
		if(Aprovado < 1 )    {
			var status = 0
			var elem = document.getElementById("spnQ");
			elem.style.color ="Red";
			spnQ.innerHTML = " Quantidade de critérios aprovado (acima de 3): " + status;
		
		}
					
			
		
	}






