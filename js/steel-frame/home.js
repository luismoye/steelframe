$(document).on('pagebeforecreate', function (evt) 
{
    // alert("pagebeforecreate fired"); 
}); 
$(document).on('pagecreate', function (evt) 
{
   // alert("pagecreatefired"); 
//   	Home.init(); 
});

jQuery('ready',main)

function main()
{
  //alert('Home!!!!'); 
   Home.init();
} 

var Home=new function()
{	
	this.init=function()
	{ 
	   this.resize(); 
	   this.eventos(); 
	   this.btnsNuevaUtilidadDisponible(); 

	   //this.vMouseOverDashBoard();
	   // this.vMouseDownDashBoard();


	   
	   // this.vMouseOutDashBoard(); 
	   this.setTitulo();  

	   $('.homepage .ui-content .ui-grid-a > div').find('p a').addClass('color-no-select-modulo-orange'); 
	}

	this.eventos=function()
	{ 
	   this.btnMenu(); 
	}

	this.setTitulo=function()
    {
       $('#toolbar .titulo-dashboard').text('Inicio'); 
    } 

	this.resize=function() 
	{	

       height=screen.height;

       heightToolbar=$('body #toolbar').height(); 
       heightForm=$('#homepage form').height();        
       heightTablero1=height-(heightToolbar+heightForm); 

       $('#homepage .ui-content').css('height',heightTablero1+'px'); 
       $('#homepage .ui-content .capa-tablero-1').css('height',heightTablero1+'px');


	}
	this.btnMenu=function()
	{
		 $('#a-menu').on('touchstart',function(e)
         {		
	        e.preventDefault(); 
           	Home.resize(); 
         	$("#popupMenu").popup("open") 
         })
	}

	this.btnsNuevaUtilidadDisponible=function()
	{	
		$('#homepage .spn-ok , #homepage .spn-close').on('vclick',function(e)
		{
			div=$(this).parents('.div-msg-notificacion');
			div.css({'display':'none'}) 
		})
	} 

	this.vMouseOverDashBoard=function()
	{
		$('.homepage .ui-content .ui-grid-a > div').on('vmouseover',function(e)
		{
		 	 $(this).addClass('select-modulo-orange'); 
		 	 $(this).find('p a').removeClass('color-no-select-modulo-orange');
			 $(this).find('p a').addClass('color-select-modulo-orange');


		}); 
		
	}

	this.vMouseDownDashBoard=function()
	{
		$('.homepage .ui-content .ui-grid-a > div').on('vmousedown',function(e)
		{
		 	 $(this).addClass('select-modulo-orange'); 
		 	 $(this).find('p a').removeClass('color-no-select-modulo-orange');
			 $(this).find('p a').addClass('color-select-modulo-orange');


		}); 
		
	}


	this.vMouseOutDashBoard=function()
	{
		$( '.homepage .ui-content .ui-grid-a > #div-nuevo-calculo,' + 
		   '.homepage .ui-content .ui-grid-a > #div-mis-calculos').on('vmouseout',function(e) 
		{
			if($(this).hasClass('select-modulo-orange'))
			{
				 $(this).removeClass('select-modulo-orange');	
			}

			$(this).find('p a').removeClass('color-select-modulo-orange');
			$(this).find('p a').addClass('color-no-select-modulo-orange');

		 	
		});
	}
}