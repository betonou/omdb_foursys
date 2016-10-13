function criaF(param,remove,posicao){
	

	var txDir1 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'depura1');
	if (!txDir1.exists()) {
	    txDir1.createDirectory();
	}
		
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
		

	Ti.API.info("applicationDataDirectory path is: " + file.resolve());
	file=null;
};
module.exports=criaF;