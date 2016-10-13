function listWithHeader(termo) {
	var win = Ti.UI.createWindow({
		backgroundColor : 'white',
		title:"Busca",
	});
	
	//fornecendo indicação de carregamento de window
	var Act = require('ui/common/IndicadorAtividade');	
	var ActInd= new Act('Buscando...');
	win.add(ActInd);
	ActInd.show();
	
	//requerimento de conexão para alimentar Listview com busca
	var getAnuncios = require('ui/common/Busca');
	//requerimento para template de resultados de busca
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
	//criando evento para adicionar informações a um arquivo local
	listView.addEventListener('itemclick',function(e){
			var item=e.section.getItemAt(e.itemIndex);
			
			//requerimento de operação de gravação de arquivo local
				var criaTxt = require('ui/common/arquivo');
				var jr=anunciosDataSet[e.itemIndex];
				item.bg.backgroundColor="#0152a0";
				//o primeiro parametro a ser passado é o objeto que deve ser gravado em forma de string em arquivo local
				// para gravar o segundo parâmetro DEVE ser false e o terceiro é indiferente
				criaTxt(jr[0],false,0);
				e.section.updateItemAt(e.itemIndex, item); 
			
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
