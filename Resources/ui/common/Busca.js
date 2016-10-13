/**
 * @author Roberto Nou
 */

function getFilm(lista,termo) {


	function vitrine(fotos) {
		
			var tumb = new Ti.UI.createImageView({
				image :fotos,
				width : '320dp',
				idlista : 'galeria',
				touchEnabled : false
			});
		
		return tumb;
	}
	//exemplo url
	//http://www.omdbapi.com/?t=love&y=&plot=short&r=json
	var resultado = [];
	var urlbase="http://www.omdbapi.com/?";
	var complemento = "t="+termo;
	var finalurl ="&y=&plot=short&r=json";
	

	var url = urlbase + complemento + finalurl;
	Ti.API.info("getFilmes \n" + url);
	
	function carrega() {

		

		var client = Ti.Network.createHTTPClient({
			onload : function() {
				try {
					//deletando possíveis quebras de linha da resposta json
					var replace = this.responseText.replace(/\t/g, ' ');
					//alert(replace);
					var json = JSON.parse(replace);
					if (json.Response == "False") {
						alert(json.Error);
					} else {
							
							var testeobj = [{

								annu : {
									text : json.Title + ' (' + json.Year+') '
								},
								Pviews : {
									image :json.Poster
								},
								preco : {
									text :  'Nota:'+json.imdbRating
								},
								info : {
									text : json.Type + ' - ' + json.Runtime + '\n' + json.Genre + ' - ' + json.Country+ '\n\n' + json.Plot
								},
								bg : {
									backgroundColor : '#d2d2d2',
								}
								
							}];
							Ti.API.info(json.Title + '\n' + json.Year);

							resultado.push(testeobj);
							if (lista.sections[0] && lista.sections[0] != undefined) {
								lista.sections[0].appendItems(testeobj);
							}

							
					}//fim do if mensagem OK
				}//fim do try
				catch(e) {
					Ti.API.info('ERRO\nERRO\nERRO\nERRO\n' + url + '\n' + e);
				}
			}//fim do onload
		});

		// Send the request data.
		client.open('GET', url);
		client.send();
	};
	carrega();
	
	return resultado;
};
module.exports = getFilm;

