function listWithHeader(termo) {
	var win = Ti.UI.createWindow({
		backgroundColor : 'white',
		title:"Busca",
	});
	var Act = require('ui/common/IndicadorAtividade');	
	var ActInd= new Act('Buscando...');
	win.add(ActInd);
	ActInd.show();
	
	var getAnuncios = require('ui/common/Busca');
	var getFav = require('ui/common/getFavoritos');	

		var criaTemplate = require('ui/common/TemplateBusca');
		
	
	var myTemplate = new criaTemplate();
	var listView = Ti.UI.createListView({
		top : 0,
		templates:{'template' : myTemplate},
		defaultItemTemplate : 'template',
		separatorColor:"transparent",
	});
	var sections = [];
	var filmSection = Ti.UI.createListSection();
	sections.push(filmSection);
	
	var anunciosDataSet = new getAnuncios(listView,termo);


	listView.setSections(sections);
	win.add(listView);
	
	listView.addEventListener('itemclick',function(e){
			var item=e.section.getItemAt(e.itemIndex);
			
			if(item.bg.backgroundColor=="#d2d2d2"){
				var criaTxt = require('ui/common/arquivo');
				var jr=anunciosDataSet[e.itemIndex];
				item.bg.backgroundColor="#0152a0";
				
				criaTxt(jr[0],false,0);
				e.section.updateItemAt(e.itemIndex, item); 
				
			}else if(item.bg.backgroundColor=="#0152a0"){
				item.bg.backgroundColor="#d2d2d2";
				e.section.updateItemAt(e.itemIndex, item);
			}
	});
	
	win.addEventListener('postlayout',function(e){
		var filmes= listView.sections[0].getItems();
		var carregamento = setInterval(function(){
			if(filmes.length==anunciosDataSet.length){
				ActInd.hide();
				clearInterval(carregamento);
			}
			
		},1000);
		
	});
	
	return win;
}

module.exports = listWithHeader;
