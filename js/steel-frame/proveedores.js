$(document).on('pagebeforecreate', function (evt) 
{

});

$(document).on('pagecreate', function (evt) 
{
   // 
   //  Proveedores.init(); 
});

$(document).on('pagecontainerbeforehide', function (evt,data) 
{
           
}); 
$(document).on('pagecontainerbeforeshow', function (evt,data) 
{     
    aProveedores=$('#proovedorpage .ui-content  .div-list-proovedores .listview li a');
    if(aProveedores.length>0)
    {   
       $('#proovedorpage .ui-content  .div-list-proovedores .listview li a').removeClass('ui-btn-icon-right'); 
    }

    paisButton=$('#proovedorpage').find('#pais-button');   
    paisButton.removeClass('ui-btn-icon-right'); 

    provinciasButton=$('#proovedorpage').find('#provincias-button'); 
    provinciasButton.removeClass('ui-btn-icon-right'); 

});

$(document).on('pagecontainerhide', function (evt,data) 
{ 
      Proveedores.init(); 
});

$(document).on('pagecontainershow', function (evt,data) 
{  
  // Proveedores.init(); 
  
}); 

var Proveedores=new function()
    {   
       this.init=function()
       {  
            this.calcularAltoContenido();
            this.setTitulo();  
            setIconoToolBar();
       }
       this.calcularAltoContenido=function()
       {
           var  heightToolbar=jQuery('body #toolbar').height()    
           var  heightPaisCiudad =jQuery('body .div-pais-ciudad-prov').height()
                height=screen.height  
                height-=heightToolbar+heightPaisCiudad; 
                $('#proovedorpage').find('.height-proovedores').css({'height':height+'px'})  
        } 
        this.setTitulo=function()
        {
           $('#toolbar .titulo-dashboard').text('Proveedores'); 
        } 

        function setIconoToolBar()
        {
          $('#toolbar .ui-icon-img-toolbar').css({'width':'10px','height':'17px'}); 
          $('#toolbar .ui-icon-inicio figure  img').attr('src','images/img-rd-flecha-atras.png'); 
        }

    } 



