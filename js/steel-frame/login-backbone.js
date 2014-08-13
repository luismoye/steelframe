// Modelp Usuario  ....... 

var UsuarioModel = Backbone.Model.extend 
({  
	initialize:function() 
	{		
		   console.info("Nuevo modelo de: UsuarioModel....."); 
	},
	defaults: 
	{
		email: 'luismoye1110@gmail.com', 
		contrasenia: '123' 
	}
});


var UsuarioView = Backbone.View.extend
({

  events: 
  {
  	"click .btn-ingresar"         : "ingresar" 

  //	"dblclick"                : "open",
   // "click .icon.doc"         : "select",
    //"contextmenu .icon.doc"   : "showMenu",
    //"click .show_notes"       : "toggleNotes",
    //"click .title .lock"      : "editAccessLevel", 
    //"mouseover .title .date"  : "showTooltip"
  },
  render: function() 
  {
   //  this.$el.html(this.template(this.model.attributes));
    // return this;
  },
  ingresar: function() 
  {
  		//  this.model.set({selected: true});
  		alert('ingresar'); 
  } 

})


var AppRouter=Backbone.Router.extend
	({
		routes: 
		{	  	
			// "": "list",
			// "menu-items/new": "itemForm",
			// "menu-items/:item": "itemDetails" 
		}, 
		initialize: function() 
		{
			this.usuario = new UsuarioModel(); 
		} 
    }); 

var app= new AppRouter();

$(function() 
{
	Backbone.history.start();
});