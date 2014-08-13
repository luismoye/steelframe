$(document).on('pagebeforecreate', function (evt) 
{
   // Usuario.init();  
}); 
$(document).on('pagecreate', function (evt) 
{

}); 
$(document).on('pagecontainerhide', function (evt,data) 
{ 
    //  Proveedores.init(); 
    //  Usuario.init(); 
});


$('ready',main)
function main()
{
     Usuario.init();
}

var Usuario=new function ()
{   
    this.init=function() 
    { 
      this.eliminarFlechasDerecha(); 
      this.eventos();  
       this.resize(); 

    }
    this.eventos=function()
    {    
      // this.loginJSON(); 
      
         this.loginPOST(); 

      // this.loginJsonpJson() 
      // this.loginJsonpGet();
      // this.loginJsonpPost() 

    }

  this.eliminarFlechasDerecha=function()
  {
     $('#loginpage .ui-listview li a').removeClass('ui-btn-icon-right');
  }
    this.loginJSON=function()
    { 

     $( ".btn-ingresar" ).click( function() 
     {    

        body=$(this).parents('body')        
        form=$(this).parents('form:eq(0)') 
     
     //  _url='http://localhost/local.loraxian.com/UsuariosMobiles/login_json'; 

      // _url='http://www.luismoye.com/local.loraxian.com/UsuariosMobiles/login_json'; 
     //  _url='http://localhost/local.loraxian.com/UsuariosMobiles/login_json'; 

      // _url='http://prototiposweb.com/moye/psteelframe/UsuariosMobiles/login_json'; 
    //  _url='http://html5cooks.com/ternium/UsuariosMobiles/login_json'; 
      
       
        datos=form.serialize(); 
        $.ajax({
                url: _url,
                type: "POST",
                dataType: 'json',
                data: datos,
                beforeSend: function (XMLHttpRequest) 
                {
                    //  if (!frm.valid()) 
                    //{
                      //    msgError("Por favor introduzca los campos requeridos.");
                      //    return false;
                   // }
                  
                  return true;
                },
                success: function (data, textStatus, XMLHttpRequest) 
                {   
                    // console.log(data);  
                    if(data!=null)
                    {
                    // alert('ok!!:'+textStatus);  
                      if(data.User!=null)
                      {  
                        // alert('ok!!:'+data.User.username); 
                        // alert('ok!!:'+data.User.password); 

                         alert('Usuario valido!!'); 
                         location.href="home.html"; 
                         return ;
                      }
                    } 
                    alert('usuario no valido!!!');  
                },
                error: function (jqXHR, textStatus, errorThrown) 
                {
                  // msgError(errorThrown);
                    console.log(errorThrown); 
                }
            });
        }); 

        return false; 
    }

    this.loginPOST=function()
    {

      $( ".btn-ingresar" ).click( function(  ) 
        {  

          location.href="home.html"; 
          return true;


           body=$(this).parents('body')       
           form=$(this).parents('form:eq(0)') 
         
        //  _url='http://localhost/local.loraxian.com/UsuariosMobiles/login_post';
        //  _url='http://www.luismoye.com/local.loraxian.com/UsuariosMobiles/login_post'; 

        // _url='http://prototiposweb.com/moye/psteelframe/UsuariosMobiles/login_post';           
         _url='http://html5cooks.com/ternium/UsuariosMobiles/login_post'; 

           
            datos=form.serialize(); 
            
            $.post(_url,datos,function(data)
            {  
              data=$.trim(data);

              if(data=='exito')
              {
                alert('Usuario valido!!'); 
                location.href="home.html"; 
                return ; 
              }

              alert('usuario no valido!!!'); 
            })  
            
         });
         return false;   
    }

    this.loginJsonpJson=function()
    {   

     $(".btn-ingresar").click(function()
      {
          body=$(this).parents('body')       
          form=$(this).parents('form:eq(0)') 

          // _url='http://localhost/local.loraxian.com/UsuariosMobiles/login_post'; 
          // _url='http://html5cooks.com/ternium/UsuariosMobiles/login_jsonp?jsoncallback=?'; 
           _url='http://prototiposweb.com/moye/psteelframe/UsuariosMobiles/loginjsonpjson?jsoncallback=?';  

        //  _url='http://www.luismoye.com/local.loraxian.com/UsuariosMobiles/loginjsonpjson?jsoncallback=?';
          datos=form.serialize(); 

            $.getJSON( _url,datos) 
              .done(
               function(data) 
               { 
                  console.log( 'data.User.login:' +data.User.login );
                  console.log( 'data.User.password:' +data.User.password ); 
               }); 
           return false; 

       });
    } 

    this.loginJsonpGet=function()
    {    

     $(".btn-ingresar").click( function () 
      {   
            body=$(this).parents('body')       
            form=$(this).parents('form:eq(0)')  

            // _url='http://localhost/local.loraxian.com/UsuariosMobiles/login_post'; 
            // _url='http://html5cooks.com/ternium/UsuariosMobiles/login_jsonp?jsoncallback=?';            
            // _url='http://prototiposweb.com/moye/psteelframe/UsuariosMobiles/login_jsonp_get?jsoncallback=?'; 

             _url='http://www.luismoye.com/local.loraxian.com/UsuariosMobiles/login_jsonp_get?jsoncallback=?'; 
             datos=form.serialize(); 
             $.support.cors=true; 

        $.ajax({  
              type: "GET",
              data:datos,
              url:_url,
              dataType: 'jsonp',
              crossDomain: true,
              success: function (data) 
              {
                  console.log('data-jsono-post:'+data);  
                 /*
                   console.log( 'data.User.login:' +data.User.login );
                   console.log( 'data.User.password:' +data.User.password ); 
                   dataStringify=JSON.stringify(data); 
                   console.log( 'dataStringify:' +dataStringify); 
                 */
              if(data!=null)
              {
                alert('Usuario valido json_post!!'); 
              //  location.href="home.html"; 
                return ; 
              }

             alert('Usuario valido json_post!!'); 


              },
              error: function (response) 
              {
                 console.log(response);
              }
        });
        return false; 
       });
  } 

  
  this.loginJsonpPost=function()
  {   

     $(".btn-ingresar").click( function () 
      {   
            body=$(this).parents('body')       
            form=$(this).parents('form:eq(0)')  

             // _url='http://localhost/local.loraxian.com/UsuariosMobiles/login_post'; 
             // _url='http://html5cooks.com/ternium/UsuariosMobiles/login_jsonp?jsoncallback=?';
             // _url='http://prototiposweb.com/moye/psteelframe/UsuariosMobiles/login_jsonp?jsoncallback=?'; 

             _url='http://www.luismoye.com/local.loraxian.com/UsuariosMobiles/login_jsonp_post?jsoncallback=?';

         datos=form.serialize(); 

        $.support.cors=true; 

        $.ajax({  
              type: "POST",
              data:datos,
              url:_url,
              dataType: 'jsonp',
              crossDomain: true,
              success: function (data) 
              {
                  console.log('data-jsono-post:'+data);  
                 /*
                   console.log( 'data.User.login:' +data.User.login );
                   console.log( 'data.User.password:' +data.User.password ); 
                   dataStringify=JSON.stringify(data); 
                   console.log( 'dataStringify:' +dataStringify); 
                 */
              if(data!=null)
              {
                alert('Usuario valido json_post!!'); 
              //  location.href="home.html"; 
                return ; 
              }

              alert('Usuario valido json_post!!'); 

              },
              error: function (response) 
              {
                 console.log(response);
              }

        });


          /*
            $.getJSON( _url,datos) 
              .done(
               function(data) 
               { 
                  console.log( 'data.User.login:' +data.User.login );
                  console.log( 'data.User.password:' +data.User.password ); 
               });
          */ 
          return false;   
       });
  }

  this.resize=function() 
  {   
    var heightPantalla =screen.height   
        heightUiContent=$('#loginpage .ui-content').height() 

        positionUiContent=$('#loginpage .ui-content').offset();

        paddingBottom= $('#loginpage .ui-content').css('paddingBottom');
        paddingBottom=paddingBottom.split('px')
        paddingBottom=parseInt(paddingBottom); 
  
  /*      marginBottom=$('#loginpage .ui-content').css('marginBottom'); 
        marginBottom=marginBottom.split('px'); 
        marginBottom=parseInt(marginBottom)
        */
  

        paddingTop= $('#loginpage .ui-content').css('paddingTop');
        paddingTop=paddingTop.split('px')
        paddingTop=parseInt(paddingTop) 

        
      /*
        marginTop=$('#loginpage .ui-content').css('marginTop');
        marginTop=marginTop.split('px')
        marginTop=parseInt(marginTop) 
        console.log('marginTop:'+marginTop) 

      */

      alto=parseInt(positionUiContent.top)+parseInt(heightUiContent)+paddingTop+paddingBottom;

      heightlistview=jQuery('body #loginpage .ui-listview').height() 
      // console.log('heightlistview:'+heightlistview) 
       // dx=heightPantalla -alto+heightlistview 

        dx=heightPantalla- (alto+heightlistview )
       // console.log('dx:'+dx) 

        pos=alto+dx; 
        //console.log('pos:'+pos)  


        jQuery('body #loginpage .ui-listview').css('top',pos+'px');
  } 
}



//google:convertir un objeto a json  
// http://revolucion.mobi/2013/04/12/login-en-servidores-externos-con-phonegap/ 
//http://www.areatic.net/2012/11/cross-domain-en-jquery-ajax-cuando-y.html

 