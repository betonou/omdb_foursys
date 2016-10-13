function retornaTemplate(){
	var myTemplate = {
			properties : {
				selectedBackgroundColor : 'white',
				width : '320dp',
				height : '80dp',
				borderWidth : 1,
				borderColor : '#cecece',
				backgroundColor:'#fafafa',
				bottom:'5dp'
			},
			childTemplates : [
						
						{ 
							type : 'Ti.UI.Label',  
							bindId : 'annu',  
							properties : { 
								color : '#0152a0',
								font : {
									fontFamily : 'Roboto-Regular',
									fontSize : '17dp',
									fontWeight:'bold'
								},
								left : '15dp',
								right : '50dp',top:'12dp',
								height:'18dp',
								textAlign:'left',
								ellipsize:Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_END
							}				
						},					
						{
							type : 'Ti.UI.Label',
							bindId : 'info',
							properties : {// Sets the image view  properties
								top : '35dp',
								color : '#777',
								font : {fontSize : '12dp'},
								height : '30dp',
								zIndex:8,
								left : '15dp',right:'5dp',
								ellipsize:Titanium.UI.TEXT_ELLIPSIZE_TRUNCATE_END
							}
							
						},
						{
							type : 'Ti.UI.Button',
							
							properties : {// Sets the image view  properties
								width : '45dp',
								height : '45dp',
								backgroundColor : '#0152a0',
								top : '5dp',
								right:'5dp',
								zIndex:3,
								backgroundImage:'/images/btn_no_fav.png'
							}
							
						}
			]
		};
		
	return myTemplate;	
	
};
module.exports=retornaTemplate;