$(document).on('pagebeforecreate', function (evt) 
{ 

});

$(document).on('pagecreate', function (evt) 
{

}); 
$(document).on('pagecontainerbeforehide', function (evt,data) 
{

});
$(document).on('pagecontainerbeforeshow', function (evt,data) 
{       
 
}); 
$(document).on('pagecontainerhide', function (evt,data) 
{
   calcularAltoContenido(); 
});

$(document).on('pagecontainershow', function (evt,data) 
{ 
   
});

function calcularAltoContenido()
{         
   var   heightToolbar=jQuery('body #toolbar').height()        
   var   heightHeaderDetalle =jQuery('#detalleproovedorpage .div-header-detalle').height()
         heightDivDirProveedor=jQuery('#detalleproovedorpage .div-dir-proveedor').height()
         marginTop=$('#detalleproovedorpage .div-imgs').css('marginTop');
         marginTop=marginTop.split('px'); 
         marginTop=parseInt(marginTop); 
         
         heightUiGridC= $('#detalleproovedorpage .div-imgs .ui-grid-c').height() 

         heightPtelefono=$('#detalleproovedorpage .div-imgs .telefono-det-provee').height() 
         
         heightMarginTopPtelefono=$('#detalleproovedorpage .div-imgs .telefono-det-provee').css('margin-top') 
         heightMarginTopPtelefono=heightMarginTopPtelefono.split('px')
         heightMarginTopPtelefono=parseInt(heightMarginTopPtelefono);  

         
         heightPemail=$('#detalleproovedorpage .div-imgs .email-det-provee').height()                  
         heightBtn = $('#detalleproovedorpage .div-imgs .div-btn-contact-provee').height();
         
         heightMarginTopBtn=$('#detalleproovedorpage .div-imgs .div-btn-contact-provee').css('margin-top') 
         heightMarginTopBtn=heightMarginTopBtn.split('px')
         heightMarginTopBtn=parseInt(heightMarginTopBtn)

        heightContentText= $('#detalleproovedorpage .div-imgs .div-det-contenido').height(); 
        
        heightContenido = heightToolbar+heightHeaderDetalle+heightDivDirProveedor+
                          marginTop+heightUiGridC + heightPtelefono+heightMarginTopPtelefono+heightPemail + 
                          heightBtn+heightMarginTopBtn ;  

         height=screen.height         
         sumaHeight=heightContentText + heightContenido 

         if ( sumaHeight > height ) 
         {
           newHeightContentText =  height-heightContenido             
           $('#detalleproovedorpage .div-imgs .div-det-contenido').css('height',newHeightContentText+'px');

         } 
} 