var palavra=" ";
var letras_ja_escolhidas = []; 
var correto=0; //Número de vezes que foi escolhida uma letra correta
var errado=0; //Número de vezes que foi escolhida uma letra errada
var Pt_mxm=0; //Número maximo de vitorias consecutivas
var derrotas=0; //Número de derrotas
var vitorias=0; //Número de vitorias
var vitorias_cons=0; //Número atual de vitorias consecutivas
var letras_selecionadas; //Letras que já foram selecionadas pelo jogador


function escolher_palavra(){ //
	var x = Math.floor(Math.random()*32077)+1; 
	console.log("Escolher Palavra: "+lista_palavras[x]);
	return lista_palavras[x];
}


function mascarar_palavra(palavra, letras, letra){	
	console.log("Mascarar Palavra: "+palavra);
	console.log("A letra é :"+letra);	
	
		return palavra.replace(/[^0-9]/gi,"_ ");
	
}			

function tentativa(e){
	
	console.log("Tentativa no botão: "+e.value);

	var dvplv = document.getElementById("palavra");
	var letra = e.value; //letra escolhida pelo utilizador
	var cmp = palavra.length;

	for (var i = 0; i < letras_ja_escolhidas.length; i++)			//Impede o utilizador de selecionar a mesma letra duas vezes.
	{
		if(letras_ja_escolhidas[i]==letra)
		{
			return;
		}
	}

	letras_ja_escolhidas.push(letra);

	if (errado>5 || correto==cmp) 	//Impede o utilizador de escolher qualquer letra quando este já ganhou ou perdeu o jogo.
	{
		return;
	}
	else
	{
		var placeholders = dvplv.innerHTML;
		
		placeholders = placeholders.split(' ');
		
		var adivinhar = true;
		
		for (var i=0 ; i<cmp; i++){

			if (palavra.charAt(i) == letra)			//Verifica se a letra selecionada encontra-se na palavra aleátoria escolhida a sorte no principio.
													//(Só funciona para vogais e consoantes minusculas e sem acento)
			{
				
				placeholders[i]=palavra.charAt(i);
				console.log("Palavra: " +placeholders);
				adivinhar = false;
				correto++;
				var snd = new Audio("Rigth.wav");
				snd.play();
				if (correto==cmp){
					Imagem(dvplv);
					dvplv.innerHTML= placeholders.join(' ');
				}
			}
			
			if (palavra.charAt(i)==letra.toUpperCase()) //Verifica se a letra selecionada encontra-se na palavra aleátoria escolhida a sorte no principio.
														//(Só funciona para vogais e consoantes maisculas)
			{ 
				
				placeholders[i]=palavra.charAt(i);
				console.log("Palavra: "+placeholders);
				adivinhar=false;
				correto++;
				var snd = new Audio("Rigth.wav");
				snd.play();
				if (correto==cmp){
					Imagem(dvplv);
					dvplv.innerHTML= placeholders.join(' ');
				}
			}	
			if(palavra.charAt(i)=="ç" && letra=='c'){ //Verifica se o 'ç' encontra-se na palavra e se sim preenche o(s) espaço(s) correspondente(s)
				
				placeholders[i]=palavra.charAt(i);
				console.log("Palavra: "+placeholders);
				adivinhar=false;
				correto++;
				var snd = new Audio("Rigth.wav");
				snd.play();
				if (correto==cmp){
					Imagem(dvplv);
					dvplv.innerHTML= placeholders.join(' ');
				}
			}
			//Verifica se existe algum 'a' maísculo ou mínusculo com acento na palavra e se a letra selecionada é 'a'. Se sim preenche o(s) espaço(s) correspondente(s) na variável placeholders
			if(palavra.charAt(i)=="á" || palavra.charAt(i)=="à"  || palavra.charAt(i)=="â"  || palavra.charAt(i)=="ã" || palavra.charAt(i)=="Á" || palavra.charAt(i)=="À" || palavra.charAt(i)=="Ã" || palavra.charAt(i)=="Â" )
			{
				if (letra=='a') {
							
					placeholders[i]=palavra.charAt(i);
					console.log("Palavra: "+placeholders); 
					adivinhar=false;
					correto++;
					var snd = new Audio("Rigth.wav");
					snd.play();
					if (correto==cmp){
						Imagem(dvplv);
						dvplv.innerHTML= placeholders.join(' ');
					}
				}
			}

			//Verifica se existe algum 'e' maísculo ou mínusculo com acento na palavra e se a letra selecionada é 'e'. Se sim preenche o(s) espaço(s) correspondente(s) na variável placeholders
			if(palavra.charAt(i)=="é" || palavra.charAt(i)=="É"  || palavra.charAt(i)=="è"  || palavra.charAt(i)=="È" || palavra.charAt(i)=="ê" || palavra.charAt(i)=="Ê" )
			{
				if (letra=='e') {
					
					placeholders[i]=palavra.charAt(i);
					console.log("Palavra: "+placeholders); //Se a letra na palavra for um 'e' com acento
					adivinhar=false;
					correto++;
					var snd = new Audio("Rigth.wav"); //
					snd.play(); //Faz tocar o som
					if (correto==cmp){
						Imagem(dvplv);
						dvplv.innerHTML= placeholders.join(' ');
					}
				}
			}

			//Verifica se existe algum 'i' maísculo ou mínusculo com acento na palavra e se a letra selecionada é 'o'. Se sim preenche o(s) espaço(s) correspondente(s) na variável placeholders
			if(palavra.charAt(i)=="í" || palavra.charAt(i)=="Í"  || palavra.charAt(i)=="ì"  || palavra.charAt(i)=="Ì" || palavra.charAt(i)=="î" || palavra.charAt(i)=="Î")
			{
				if (letra=='i') {
					
					placeholders[i]=palavra.charAt(i);
					console.log("Palavra: "+placeholders); //Se a letra na palavra for um 'i' com acento
					adivinhar=false;
					correto++;
					var snd = new Audio("Rigth.wav");
					snd.play();
					if (correto==cmp){
						Imagem(dvplv);
						dvplv.innerHTML= placeholders.join(' ');
					}
				}
			}	

			//Verifica se existe algum 'o' maísculo ou mínusculo com acento na palavra e se a letra selecionada é 'o'. Se sim preenche o(s) espaço(s) correspondente(s) na variável placeholders
			if(palavra.charAt(i)=="ó" || palavra.charAt(i)=="Ó"  || palavra.charAt(i)=="ò"  || palavra.charAt(i)=="Ò" || palavra.charAt(i)=="õ" || palavra.charAt(i)=="Õ" || palavra.charAt(i)=="ô" || palavra.charAt(i)=="Ô")
			{
				if (letra=='o') {
					
					placeholders[i]=palavra.charAt(i);
					console.log("Palavra: "+placeholders); //Se a letra na palavra for um 'o' com acento
					adivinhar=false;
					correto++;
					var snd = new Audio("Rigth.wav");
					snd.play();
					if (correto==cmp){
						Imagem(dvplv);
						dvplv.innerHTML= placeholders.join(' ');
					}
				}
			}	

			//Verifica se existe algum 'u' maísculo ou mínusculo com acento na palavra e se a letra selecionada é 'u'. Se sim preenche o(s) espaço(s) correspondente(s) na variável placeholders
			if(palavra.charAt(i)=="ú" || palavra.charAt(i)=="Ú"  || palavra.charAt(i)=="ù"  || palavra.charAt(i)=="Ù" || palavra.charAt(i)=="û" || palavra.charAt(i)=="Û" )
			{
				if (letra=='u') {
					
					placeholders[i]=palavra.charAt(i);
					console.log("Palavra: "+placeholders); //Se a letra na palavra for um 'u' com acento
					adivinhar=false;
					correto++;
					var snd = new Audio("Rigth.wav");
					snd.play();
					if (correto==cmp){
						Imagem(dvplv);
						dvplv.innerHTML= placeholders.join(' ');
					}
				}
			}		
		}

		if(adivinhar)
		{
			errado++;
			var snd = new Audio("Wrong.wav")
			snd.play();
			Imagem();
		}

		letras_selecionadas.innerHTML=letras_ja_escolhidas;
		dvplv.innerHTML= placeholders.join(' ');
		console.log("Tentativas corretas: "+correto);
		console.log("Tentativas erradas: "+errado);
	}
		
}

function Imagem(){
	if (errado > 0) {
		document.getElementById("imagem").src="img/enforcado5.gif"; //muda a imagem 
	}
	if (errado > 1) {
		document.getElementById("imagem").src="img/enforcado4.gif";
	}
	if (errado > 2) {
		document.getElementById("imagem").src="img/enforcado3.gif";
	}
	if (errado > 3) {
		document.getElementById("imagem").src="img/enforcado2.gif";
	}
	if (errado > 4) {
		document.getElementById("imagem").src="img/enforcado1.gif";
		}
	if (errado > 5) {
		derrotas++;
		document.getElementById("imagem").src="img/enforcado0.gif";
		setTimeout(Mostrar_palavra,350);
	}
	if (correto==palavra.length){	//Se o numero de letras corretas for igual ao comprimento da palavra o utilizador ganha o jogo.
		vitorias++;
		vitorias_cons++;
		document.getElementById("imagem").src="img/Freedom.gif";
		
		setTimeout(alert("Ganhaste!!!!!! A palavra correta era " + palavra),800000000000000);
		document.getElementById("freedom").innerHTML="Imagem de Armando Sousa e Miguel Maia";
	}
}

function Mostrar_palavra(){ //Se o jogador perder preenche o resto dos espaços vazios com as letra correspondentes a vermelho
	var dvplv = document.getElementById("palavra"); 
	var placeholders = dvplv.innerHTML;
		
		
	placeholders = placeholders.split(' ');
		
	for (var i = 0; i < palavra.length; i++)
	{
		if(placeholders[i]=='_')
		{
			placeholders[i]=  palavra.charAt(i).fontcolor("red");
		}
	};
	dvplv.innerHTML=placeholders.join(' ');
	console.log(alert("Perdeste. A palavra era "+palavra));
}

function Pontuação() //Guarda e mostra a pontuação do jogo
{	var x=1
	if (x <derrotas) 
	{
		x=derrotas;
		vitorias_cons=0;
	}
	if(Pt_mxm<vitorias_cons && derrotas==derrotas)
	{
		Pt_mxm=vitorias_cons;
	}
	console.log(alert("Número máximo de vitórias consecutivas: "+Pt_mxm+"\nNúmero de vitórias: "+vitorias+"\nNúmero de derrotas: "+derrotas));
}

function Nova_palavra() //Cria uma nova palavra
{
	correto=0;
	errado=0;
	letras_ja_escolhidas=[];
	letras_selecionadas.innerHTML=letras_ja_escolhidas;
	document.getElementById("imagem").src="img/enforcado6.gif";
	palavra= escolher_palavra();
	var dvplv = document.getElementById("palavra");
	dvplv.innerHTML = mascarar_palavra(palavra, letras_ja_escolhidas);
	console.log("Palavra Mascarada: "+dvplv.innerHTML);
}

function main(){
	var dvbtn = document.getElementById("botoes");
	for(i = 97; i < 123; i++)
	{
		dvbtn.innerHTML += "<button value='"+String.fromCharCode(i)+"' onclick='tentativa(this);'>"+String.fromCharCode(i)+"</button>";
	}
	
	letras_selecionadas=document.getElementById("Letras_escolhidas");
	Nova_palavra();
	

}

window.onload = main;
