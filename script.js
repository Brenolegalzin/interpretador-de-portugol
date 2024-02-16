let codigo = document.getElementById("code").value;
function execute(){
	codigo = document.getElementById("code").value;
	for(let i=0; i<=codigo.length; i++){
		codigo = codigo.replace("funcao", "function");
	    codigo = codigo.replace("se", "if");
	    codigo = codigo.replace("variavel", "let");
	    codigo = codigo.replace("para", "for");
	    codigo = codigo.replace("enquanto", "while");
	    codigo = codigo.replace("senao", "else ");
	    codigo = codigo.replace("fale", "alert");
	    codigo = codigo.replace("escreva", "console.log");
	    codigo = codigo.replace("senao se", "else if");
	    codigo = codigo.replace("faca", "{");
	    codigo = codigo.replace("termine", "}");
	    codigo = codigo.replace("pergunte", "prompt");
	    codigo = codigo.replace("verdadeiro", "true");
	    codigo = codigo.replace("falso", "false");
	    codigo = codigo.replace("limpe()", "console.clear();");
	}
	for(let z = 0; z<=codigo.length; z++){
		codigo = codigo.replace("converterEmNumero", "parseInt");
		codigo = codigo.replace("converterEmLetra", "toString");
	}
	eval(codigo);
}
function addIf(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+"se() faca \n \n termine \n"; 
}
function addFunc(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+"funcao o() faca \n \n termine \n"; 
}
function addVar(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+"variavel i = 0;"; 
}
function addFor(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+"para(variavel x=0; x<=5; x++) faca \n \n termine"; 
}
function addWhile(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+"enquanto(true) faca \n \n termine"; 
}
function addComments(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+"//"; 
}
function clearConsole(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+"limpe()"; 
}
function escreverMensagem(){
	codigo = document.getElementById("code").value;
	document.getElementById("code").value = codigo+'escreva("ola mundo!")'; 
}
