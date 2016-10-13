//FirstView Component Constructor
function FirstView() {

	//informacoes de contato
		var nome = 'Roberto Nou   (79)99921-4848';
		var mail = 'betonou@gmail.com';
	//requerimento das windows de busca e favoritos
	var Listagem = require('ui/common/ListViewFavoritos');
	var Busca = require('ui/common/ListViewBusca');
	
	var email = Ti.UI.createLabel({
		text : mail,
		color : '#FFF',
		height : 'auto',
		left : '15dp',
		right : '5dp',
		top : '100dp',
		font : {
			fontFamily : 'Roboto-Regular',
			fontSize : '13dp'
		},
		textAlign : 'left'
	});
	var titleSection = Ti.UI.createLabel({
		text : nome,
		color : '#FFF',
		height : 'auto',
		left : '15dp',
		right : '15dp',
		top : '80dp',
		font : {
			fontFamily : 'Roboto-Regular',
			fontSize : '16dp'
		},
		textAlign : 'left'
	});
	var aTextField = Ti.UI.createTextField({
		hintText:"Busca por Título",
		borderWidth:'1dp',
		height:'60dp',
		left:'5dp', right:'5dp',
		keyboardType :Ti.UI.KEYBOARD_DEFAULT,
		top:'135dp',
		font:{fontsize:'18dp'},
		color:'#fff',
		returnKeyType : Titanium.UI.RETURNKEY_DONE,
	});
	var headList = Ti.UI.createView({
		backgroundColor : '#5e5e5e',
		height : Ti.UI.FILL,
		width : Ti.UI.FILL,
		zIndex : 10
	});
	

	var logo = Ti.UI.createImageView({
		image : '/images/logo.png',
		width : "210dp",
		top : "10dp",
		left : "10dp"
	});
	
	//usando templates para composicao do menu principal
	//requisitado em escopo de projeto
	var myTemplate = {

		childTemplates : [{
			type : 'Ti.UI.ImageView',
			bindId : 'pic',
			properties : {
				width : '35dp',
				height : '35dp',
				left : '15dp',
				top : 10
			}
		}, {
			type : 'Ti.UI.Label',
			bindId : 'info',
			properties : {
				color : '#444',
				font : {
					fontFamily : 'Arial',
					fontSize : '15dp'
				},
				left : 70,
				top : 15,
			}
		}]
	};
	
	//criando menu com objeto
	var listView = Ti.UI.createListView({
		templates : {
			'template' : myTemplate
		},
		top : '200dp',
		defaultItemTemplate : 'template',
		separatorInsets : {
			left : 15,
			right : 15
		},
		backgroundColor : 'white'
	});

	var sections = [];
	var menu = Ti.UI.createListSection();

	// criando itens do menu
	var menuItems = [{
		info : {text : 'Buscar Filme'},
		pic : {image : '/images/icon_menu_busca.png'},
		interna : 0
	}, {
		info : {text : 'Favoritos'},
		pic : {image : '/images/icon_menu_fav.png'},
		interna : 2
	}];
	//carregando itens no menu
	menu.setItems(menuItems);
	sections.push(menu);
	listView.setSections(sections);
	//adicionando objetos na window
	headList.add(listView);
	headList.add(titleSection);
	headList.add(logo);
	headList.add(email);
	headList.add(aTextField);
	//criando evento do menu 
	listView.addEventListener("itemclick", function(e) {
		var item = e.section.getItemAt(e.itemIndex);
		if(e.itemIndex==0 ){
			if(aTextField.value.length>0){
				var winBusca = Busca(aTextField.value);
			winBusca.open();
			}else{
				alert('Busca Inválida');
			}
			
		}else{
			var winFav = Listagem();
			winFav.open();
		}
	
	});
	return headList;
}

module.exports = FirstView;
