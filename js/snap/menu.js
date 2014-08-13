// "use strict";
var addEvent = function addEvent(element, eventName, func) 
{
 	if (element.addEventListener) 
  {
    	return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
}; 

addEvent(document.getElementById('open-left'), 'click', function()
{snapper.open('left');}); 

/* Prevent Safari opening links when viewing as a Mobile App */ 
(function (a, b, c) {
    if(c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener("click", function (a) {
            d = a.target;
            while(!f.test(d.nodeName)) d = d.parentNode;
            "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
        }, !1)
    }
 })(document, window.navigator, "standalone"); 

  var snapper = new Snap({element:document.getElementById('content'), disable: 'right', hyperextensible: false});
   
  // menu de Dashboard ...
  var divdashboard=document.getElementById('div-dashboard');
  var aDashboard=null;

  if(divdashboard!=null)
  {
    var aDashboard=divdashboard.getElementsByTagName('a')[0]   
  }

  var divNuevoCalculo=document.getElementById('div-nuevo-calculo');
  var aNuevoCalculo=null;
  if(divNuevoCalculo!=null)
  {
    var aNuevoCalculo=divNuevoCalculo.getElementsByTagName('a')[0]   
  }
  

  var divMisCalculos=document.getElementById('div-mis-calculos'); 
  var aMisCalculos=null;

  if(divMisCalculos!=null)
  {
    var aMisCalculos=divMisCalculos.getElementsByTagName('a')[0];
  }
  

  var divGaleriaSteel=document.getElementById('div-galeria-steel'); 
  var aGaleriaSteel=null;
  if(divGaleriaSteel!=null)
  {
     var aGaleriaSteel=divGaleriaSteel.getElementsByTagName('a')[0];  
  }

  var divProovedores=document.getElementById('div-proovedores');
  var aProovedores=null;
  if(divProovedores!=null)
  {
    var aProovedores=divProovedores.getElementsByTagName('a')[0]; 
    // alert('div-proovedor')
  }
  

  var divHerramientas=document.getElementById('div-herramientas');
  var aHerramientas=null;
  if(divHerramientas!=null)
  {
    var aHerramientas=divHerramientas.getElementsByTagName('a')[0];  
  }
  

  var divFeeback=document.getElementById('div-feeback');
  var aFeeback=null;

  if(divFeeback!=null)
  {
    var aFeeback=divFeeback.getElementsByTagName('a')[0];   
  }

  //  console.log(' divClaseNuevoCAlculo.length:'+ divClaseNuevoCAlculo.length) 
  //  div-herramientas
  //  menú selecionado por defecto ... 

  menuSeleccionado={id:'a-dashboard',clase:'ui-btn-active',tiempo:300} ;
   recuperarEventosDashboard();

    // Complemento del  menú 
   
  

    // obtiene lz UL padre
    // Opciones de mwenú    
    var linkDashboard=document.getElementById('a-dashboard'); 
    var  ulMenu=linkDashboard.parentNode.parentNode
    linkDashboard.addEventListener('click',eventosLinksAddEventListener); 


    var linkNuevoCalculo=document.getElementById('a-nuevo-calculo'); 
    linkNuevoCalculo.addEventListener('click', eventosLinksAddEventListener );
    
    var linkMisCalculos=document.getElementById('a-mis-calculos'); 
    linkMisCalculos.addEventListener('click', eventosLinksAddEventListener);


    var linkGaleriaSteelFrame=document.getElementById('a-galeria-steel-frame');
     linkGaleriaSteelFrame.addEventListener('click', eventosLinksAddEventListener);

    var linkProovedores=document.getElementById('a-proveedores');
    linkProovedores.addEventListener('click', eventosLinksAddEventListener) ;          

    var linkHerramientas=document.getElementById('a-herramientas'); 
    linkHerramientas.addEventListener('click',eventosLinksAddEventListener);

//    var linkFeeback=document.getElementById('a-feeback'); 
 //   linkFeeback.addEventListener('click', eventosLinksAddEventListener);  

    var linkCerrarSession=document.getElementById('a-cerrar-session'); 
        linkCerrarSession.addEventListener('click', eventosLinksAddEventListener); 


      function eventosLinksAddEventListener(e) 
      {    
          
           e.preventDefault()
           // alert('snapper.state().state=>'+snapper.state().state)
           //if( snapper.state().state=="left" )
          // {
              seleccionarMenu(this.parentNode,this) 
              snapper.close(); 
           //}

           idLink=this.getAttribute('id') 
           link=null; esDashboard=false;

           // alert('idLink:'+idLink); 

            switch(idLink) 
            {
              case  'a-dashboard': 
                      link=aDashboard;
                       esDashboard=true; 
                       // toolbar ... 
                       toolbar=document.getElementById('toolbar'); 
                       toolbar.childNodes[3].innerText="Inicio"; 

            
                  break;

              case 'a-nuevo-calculo':
                      link=aNuevoCalculo
                    break;    

              case 'a-mis-calculos':                    
                    link=aMisCalculos                      
                    break;          

              case  'a-galeria-steel-frame':                    
                        link=aGaleriaSteel
                    break; 

              case 'a-proveedores':                       
                      link=aProovedores 
                          break;

              case 'a-herramientas':                        
                        link=aHerramientas
                          // $('body').find('.height-proovedores').removeClass()
                   break;

             /* case  'a-feeback':                   
                     link=aFeeback
                     break; 
                     */

              case  'a-cerrar-session': 
                     location.href="index.html";
                     return 
        }

        if(link!=null)
        {
          setTimeout(function()
            {
               link.click();

            },menuSeleccionado.tiempo); 
        } 
        /*
        if(idLink=='a-proveedores')
        {
           


        }
        */

        /*
           if ( esDashboard )
           {
               alert('paso')
            // asignarEventosDashboard(divClaseNuevoCalculo);  
               recuperarEventosDashboard(); 
           }
        */ 
     } 
     function recuperarEventosDashboard()
     {        
      /*
          var divClaseDashboard=document.querySelectorAll('.div-dashboard');
              asignarEventosDashboard(divClaseDashboard);s
      */
      // height-proovedores 
      
      var divClaseNuevoCalculo=document.querySelectorAll('.div-nuevo-calculo');
          asignarEventosDashboard(divClaseNuevoCalculo);       

      var divClaseMisCalculos=document.querySelectorAll('.div-mis-calculos'); 
          asignarEventosDashboard(divClaseMisCalculos); 


     var divClaseMisCalculos=document.querySelectorAll('.div-mis-calculos'); 
         asignarEventosDashboard(divClaseMisCalculos);
         // div-mis-calculos 
     }     
     function asignarEventosDashboard(listaElementos)
     {  
        for(key in listaElementos) 
        {
           if(!isNaN(key)) //es Número 
           {   
              // console.log(listaElementos[key].tagName); 
               listaElementos[key].addEventListener('click', eventosDashboardAddEventListener);
           }
        }
     }
     function eventosDashboardAddEventListener(e) 
     {    
       // alert('tagName:'+this.tagName)  
       link=null;
       if(this.tagName!='A')
       {
          if ( this.tagName!='DIV' )
          {
            div=this
          }
          else
          {
            div=this; 
          }
       }
       else
       {
         link=this
       } 
     } 
    /* metodos de ayuda*/
    function eliminarClaseActivaDMenu(ul,clase)
    {
         listaLi=ul.getElementsByTagName("li"); 

         for(i=0 ;i<listaLi.length;i++)
         {  
           if(existeClase ( listaLi[i] , clase ))
           {
               removeClass(listaLi[i],clase)
           }
         }
    }    
    function existeClase(objeto,clase)
    {
         return objeto.className.match(new RegExp('(\\s|^)'+clase+'(\\s|$)'));
    }

    function addClass(objeto,clase)
    { 
       if(!existeClase(objeto,clase) )
       {
            objeto.className+=" "+clase;
       } 
    }

    function removeClass(objeto,clase)
    {
          var exp =new RegExp('(\\s|^)'+clase+'(\\s|$)');
              objeto.className=objeto.className.replace(exp,"");
    }

    function seleccionarMenu(li,a)
    {
        eliminarClaseActivaDMenu(ulMenu,menuSeleccionado.clase) 
        addClass(li,menuSeleccionado.clase)
        menuSeleccionado.id=a.id;

    }



    /*
    function seleccionarMenuDashboard ( inputHidden )
    {
      console.log('attr:'+inputHidden.getAttribute("value"))
        a=document.getElementById(inputHidden.getAttribute("value")) 
        seleccionarMenu(a.parentNode,a)
    }
    */

    