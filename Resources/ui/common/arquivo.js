function criaF(param,remove,posicao){
//param = objeto a ser adicionado no json
// remove(boolean)
//posicao = intero q indica posicao do objeto a ser removido do arranjo
	
//criando pasta para armazenamento de json para consulta off line
	var txDir1 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'depura1');
	if (!txDir1.exists()) {
	    txDir1.createDirectory();
	}
//criando arquivo		
	var file = Ti.Filesystem.getFile(txDir1.resolve(), 'filmes_favoritos.json');
		if (file.exists()) {
			//alert('arquivo existe');
			var anterior=file.read().text;
			var config = JSON.parse(anterior);
			if(remove){
				config.splice(posicao, 1);
			}else{
				config.push(param);
			}
  			
  			file.write(JSON.stringify(config));
		}else{
			//alert('arquivo virgem');
			var config =[];
			config.push(param);
			file.write(JSON.stringify(config));
		}
		Ti.API.info("externalStorageDirectory path is: " + file.resolve());
		Ti.App.Properties.setString('favoritos', file.resolve());
		
//para depuracao
	Ti.API.info("applicationDataDirectory path is: " + file.resolve());
	file=null;
};
module.exports=criaF;