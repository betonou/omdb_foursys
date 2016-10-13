function adicionaIndicador(texto){
	texto=texto+" ";
	var style;
	if (Ti.Platform.name === 'iPhone OS'){
	  style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
	}else {
	  style = Ti.UI.ActivityIndicatorStyle.DARK;
	}
	
	var activityIndicator = Ti.UI.createActivityIndicator({
	  color: '#555',
	  height:'100dp',
	  backgroundColor:'#fff',
	  font: {fontSize:'22dp'},
	  message: texto,
	  style:style,
	  left:'40dp',
	  right:'40dp',
	  zIndex:99
	});
	return activityIndicator;
};
module.exports=adicionaIndicador;