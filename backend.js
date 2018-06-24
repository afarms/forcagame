window.onload= inicio;
var escolha = Math.floor(Math.random()*3);// gerando número aleatorio de 0 até 2

var palavra1 = ["p","e","r","g","a","m","i","n","h","o"]; // 10 posições
var palavra01= new Array(10);

var palavra2 = ["b","o","r","b","o","l","e","t","a"]; // 9 posiçoes
var palavra02= new Array(9);

var palavra3 = ["r","e","p","r","o","v","a","d","o"]; // 9 posições
var palavra03= new Array(9);
var i,a,b,c,cont1=0,cont2=0,cont2=0;

//criando o vetor da quantidade de letras erradas; 
var palavraERRADA = [0,0,0,0,0]; //5 posições

function inicio(){
		if(escolha==0){
			alert(escolha+" Dica: Papel ou manuscrito antigo! ");

			}else if(escolha ==1){
				alert(escolha+" Dica: É um inseto! ");

				}else if (escolha ==2) {
					alert(escolha+" Uma das situações de quem é avaliado!");
					}

	document.getElementById("botao2").addEventListener("click",limpar);
	
	/*
	do{
		escolha= prompt("Informe um valor entre: \n (1) { Espécie de papel antigo }\n (2) { Inceto }\n (3) { Situação ou contição de alguém }\n Para decidir entre 3 palavras a serem adivinhadas! ");
	} while(escolha== null || escolha=="");
	*/

	if(escolha==0){
		//colocando as divs que representa cada letra, referente a palavra1
		document.getElementById("palavras").innerHTML = "<div class='a1' id='aa0'></div><div class='a1' id='aa1'></div><div class='a1' id='aa2'></div><div class='a1' id='aa3'></div><div class='a1' id='aa4'></div><div class='a1' id='aa5'></div><div class='a1' id='aa6'></div><div class='a1' id='aa7'></div><div class='a1' id='aa8'></div><div class='a1' id='aa9'></div>"
			//chamando a função da palavra1
			document.getElementById("botao").addEventListener("click",palavra10);


		}else if(escolha==1){
			//colocando as divs que representa cada letra, referente a palavra2
			document.getElementById("palavras").innerHTML = "<div class='a1' id='aa0'></div><div class='a1' id='aa1'></div><div class='a1' id='aa2'></div><div class='a1' id='aa3'></div><div class='a1' id='aa4'></div><div class='a1' id='aa5'></div><div class='a1' id='aa6'></div><div class='a1' id='aa7'></div><div class='a1' id='aa8'></div>"
			//chamando a função da palavra2
			document.getElementById("botao").addEventListener("click",palavra20);


			}else if (escolha ==2) {
				//colocando as divs que representa cada letra, referente a palavra3 
					document.getElementById("palavras").innerHTML = "<div class='a1' id='aa0'></div><div class='a1' id='aa1'></div><div class='a1' id='aa2'></div><div class='a1' id='aa3'></div><div class='a1' id='aa4'></div><div class='a1' id='aa5'></div><div class='a1' id='aa6'></div><div class='a1' id='aa7'></div><div class='a1' id='aa8'></div>"
					//chamando a função da palavra2
					document.getElementById("botao").addEventListener("click",palavra30);
			}




	



}
function palavra10 (){
	//criei uma variavel para verificar o valor inserido
	var verificar = document.getElementById("jogada").value;
	console.log("o valor da jogada é: "+verificar);

	//limpando o lugar que é inserido a letra para poder colocar uma nova;
	document.getElementById("jogada").value="";
	
	for(i= 0; i< palavra1.length; i++){
		if(verificar ==palavra1[i]){
			document.getElementById("aa"+i).innerHTML=verificar;
			palavra01[i]=2;
			i=10// i vai receber 10 para poder sair do for;
		}
		//marcar a palavra errada
		if(i==9){
			if (verificar != palavra1[i]) {
				for(a=0;a<palavraERRADA.length; a++){
					if(palavraERRADA[a]==0){
						document.getElementById("er"+a).innerHTML =verificar;
						document.getElementById("er"+a).style.backgroundColor = 'red';
						palavraERRADA[a]=1;
						a=5; // a vai receber 5 para poder sair do for;
					}
		
				}
			}		
		}	
		
		
	}
	

	if ((palavra01[0]==2)&(palavra01[1]==2)&(palavra01[2]==2)&(palavra01[3]==2)&(palavra01[4]==2)&(palavra01[5]==2)&(palavra01[6]==2)&(palavra01[7]==2)&(palavra01[8]==2)&(palavra01[9]==2)){
		alert("parabéns você venceu!");
	}
	if ((palavraERRADA[0]==1)&(palavraERRADA[1]==1)&(palavraERRADA[2]==1)&(palavraERRADA[3]==1)&(palavraERRADA[4]==1)){
		alert("Lamento mas você perdeu! Click em RESETAR para jogar novamente!");
	}



}//FIM DA FUNÇÃO DA PALAVRA10

function palavra20(){
	//criei uma variavel para verificar o valor inserido
	var verificar = document.getElementById("jogada").value;
	console.log("o valor da jogada é: "+verificar);

	//limpando o lugar que é inserido a letra para poder colocar uma nova;
	document.getElementById("jogada").value="";
	
	for(i= 0; i< palavra2.length; i++){
		if(verificar ==palavra2[i]){
			for(b= 0; b< palavra2.length; b++){
				if(verificar ==palavra2[b]){
				document.getElementById("aa"+b).innerHTML=verificar;
				palavra02[b]=2;
				
				}

				}
				
			i=9// i vai receber 10 para poder sair do for;
		}
		//marcar a palavra errada
		if(i==8){
			if (verificar != palavra2[i]) {
				for(a=0;a<palavraERRADA.length; a++){
					if(palavraERRADA[a]==0){
						document.getElementById("er"+a).innerHTML =verificar;
						document.getElementById("er"+a).style.backgroundColor = 'red';
						palavraERRADA[a]=1;
						a=5; // a vai receber 5 para poder sair do for;
					}
		
				}
			}		
		}	
		
		
	}
	

	if ((palavra02[0]==2)&(palavra02[1]==2)&(palavra02[2]==2)&(palavra02[3]==2)&(palavra02[4]==2)&(palavra02[5]==2)&(palavra02[6]==2)&(palavra02[7]==2)&(palavra02[8]==2)){
		alert("parabéns você venceu!");
	}
	if ((palavraERRADA[0]==1)&(palavraERRADA[1]==1)&(palavraERRADA[2]==1)&(palavraERRADA[3]==1)&(palavraERRADA[4]==1)){
		alert("Lamento mas você perdeu! Click em RESETAR para jogar novamente!");
	}



}//FIM DA FUNÇÃO PALAVRA20
function palavra30(){

	//criei uma variavel para verificar o valor inserido
	var verificar = document.getElementById("jogada").value;
	console.log("o valor da jogada é: "+verificar);

	//limpando o lugar que é inserido a letra para poder colocar uma nova;
	document.getElementById("jogada").value="";
	
	for(i= 0; i< palavra3.length; i++){
		if(verificar ==palavra3[i]){
			for(c= 0; c< palavra3.length; c++){
				if(verificar ==palavra3[c]){
				document.getElementById("aa"+c).innerHTML=verificar;
				palavra03[c]=2;
				
				}

				}
				
			i=9// i vai receber 10 para poder sair do for;
		}
		//marcar a palavra errada
		if(i==8){
			if (verificar != palavra3[i]) {
				for(a=0;a<palavraERRADA.length; a++){
					if(palavraERRADA[a]==0){
						document.getElementById("er"+a).innerHTML =verificar;
						document.getElementById("er"+a).style.backgroundColor = 'red';
						palavraERRADA[a]=1;
						a=5; // a vai receber 5 para poder sair do for;
					}
		
				}
			}		
		}	
		
		
	}
	

	if ((palavra03[0]==2)&(palavra03[1]==2)&(palavra03[2]==2)&(palavra03[3]==2)&(palavra03[4]==2)&(palavra03[5]==2)&(palavra03[6]==2)&(palavra03[7]==2)&(palavra03[8]==2)){
		alert("parabéns você venceu!");
	}
	if ((palavraERRADA[0]==1)&(palavraERRADA[1]==1)&(palavraERRADA[2]==1)&(palavraERRADA[3]==1)&(palavraERRADA[4]==1)){
		alert("Lamento mas você perdeu! Click em RESETAR para jogar novamente!");
	}

}//FIM DA FUNÇÃO PALAVRA20

//cliando a função de resetar
function limpar(){
	window.location.reload(); // comando usado para reiniciar a página e começar denovo. 



}