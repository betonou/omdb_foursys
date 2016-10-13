function getAnuncios(lista) {
	var txDir2 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'depura1');
	var file = Ti.Filesystem.getFile(txDir2.resolve(), 'filmes_favoritos.json');
	var favoritos = file.read();
	var resultado = [];

	Ti.API.info("get fvoritos \n" + favoritos.text);


	function carrega() {

		try {
			var json = JSON.parse(favoritos.text);
			
			if (json.length > 0) {
				for (var i = 0,j = json.length; i < j; i++) {
					var testeobj = [json[i]];

					resultado.push(testeobj);
					lista.sections[0].appendItems(testeobj);

				};//fim do for

			}else{
				alert('Você não possui filmes favoritos');
			}//fim do if j.0

		}//fim do try
		catch(e) {
			alert(e);
		}

	};//fim da declaração da função
	carrega();

	return resultado;
};
module.exports = getAnuncios;
