function retornaTemplate(){
	var myTemplate = {
			properties : {
				selectedBackgroundColor : '#cecece',
				width : '320dp',
				height : '470dp',
				borderWidth : 1,
				borderColor : '#cecece',
				borderRadius : 10,
				backgroundColor:'#fafafa',
				bottom:'5dp',
				top:'5dp'
			},
			childTemplates : [
				{
					type : 'Ti.UI.ImageView',
					bindId : 'Pviews',
					properties : {// Sets the image view  properties
						width : '210dp',
						height : '280dp',
						backgroundColor : '#cecece',
						borderColor : '#cecece',
						top:'35dp',
						idlista:'galeria',
						touchEnabled : false
					}
				}, {
					type : 'Ti.UI.View',
					properties : {
						backgroundColor : "#fafafa",
						width : '320dp',
						height : '160dp',
						borderColor : '#cecece',
						top:'320dp',
						idlista:'card'
					},
					childTemplates : [
						{ 
							type : 'Ti.UI.Label',  
							bindId : 'info',  
							properties : { 
								color : '#777',
								font : {
									fontFamily : 'Roboto-Regular',
									fontSize : '14dp'
								},
								right : '10dp',
								top : '5dp',
								textAlign:'right',
								ellipsize:Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_END
							}				
						},{ 
							type : 'Ti.UI.Label',  
							bindId : 'preco',  
							properties : { 
								color : '#0152a0',
								font : {
									fontFamily : 'Roboto-Regular',
									fontSize : '16dp'
								},
								left : '10dp',
								top : '5dp',
								height:'20dp',
								width:'160dp',
								ellipsize:Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_END 
							},
							
						}
					]
				},
				{
					type : 'Ti.UI.Label',
					bindId : 'annu',
					properties : {// Sets the image view  properties
						width : '220dp',
						height : '20dp',
						color : '#0152a0',
						font : {
									fontFamily : 'Roboto-Regular',
									fontSize : '17dp',
									fontWeight:'bold'
						},
						left : '10dp',
						top : '8dp',
						idlista:'valor'
					}
					
				},
				{
					type : 'Ti.UI.ImageView',
					bindId:'bg',
					properties : {// Sets the image view  properties
						width : '36dp',
						height : '36dp',
						right:'10dp',
						backgroundColor : '#0152a0',
						borderColor : '#fff',
						top:'5dp',
						image:'/images/btn_fav.png',
						id:'favoritar'
					}
					
				}
			]
		};
		
	return myTemplate;	
	
};
module.exports=retornaTemplate;