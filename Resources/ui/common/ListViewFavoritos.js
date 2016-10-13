function listWithHeader() {
	var win = Ti.UI.createWindow({
		backgroundColor : 'white',
		title:"Favoritos",
	});
	var Act = require('ui/common/IndicadorAtividade');	
	var ActInd= new Act('Buscando...');
	win.add(ActInd);
	ActInd.show();
	
	var getFav = require('ui/common/getFavoritos');	

		var criaTemplate = require('ui/common/TemplateFavoritos');

	var myTemplate = new criaTemplate();
	
function refresh(){
	var listView = Ti.UI.createListView({
		top : 0,
		templates:{'template' : myTemplate},
		defaultItemTemplate : 'template',
		separatorColor:"transparent",
	});
	var sections = [];
	var filmSection = Ti.UI.createListSection();
	sections.push(filmSection);
	listView.setSections(sections);

	var filmesDataSet = new getFav(listView);
	var filmes= listView.sections[0].getItems();

	
	win.add(listView);
	listView.addEventListener('itemclick',function(e){
			var item=e.section.getItemAt(e.itemIndex);
			
			
				var criaTxt = require('ui/common/arquivo');
				var jr=filmesDataSet[e.itemIndex];
				item.bg.backgroundColor="#cecece";
				win.remove(listView);
				criaTxt(jr[0],true,e.itemIndex);
				refresh();
				 
				
			
	});
	win.addEventListener('postlayout',function(e){
		
		var carregamento = setInterval(function(){
			if(filmes.length==filmesDataSet.length){
				ActInd.hide();
				clearInterval(carregamento);
			}
			
		},1000);
		
	});
}
refresh();
	
	
	return win;
}

module.exports = listWithHeader;
