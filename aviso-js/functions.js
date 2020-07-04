$(function(){

	/*
	var frase = 'guilherme@hotmail.com';

	var verifica = frase.match(/^(.*?)(@)(.*?)$/);

	if(verifica != null){
		console.log("Encontramos algo!");
		console.log(verifica[1]);
		console.log(verifica[2]);
		console.log(verifica[3]);
	}else{
		console.log("Não encontramos nada");
	}
	*/

	abrirJanela();
	verificarCliqueFechar();

	function abrirJanela(){
		$(document).ready(function() {
		$('.bg').fadeIn();
});
		
		
}

	function verificarCliqueFechar(){

		var el = $('body,.closeBtn');

		el.click(function(){
			$('.bg').fadeOut();
		})

		$('.form').click(function(e){
			e.stopPropagation();
		})

	}
	
});