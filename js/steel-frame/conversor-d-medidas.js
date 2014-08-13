$(document).on('pagecontainerbeforeshow', function (evt,data)
 {       
        // $('#medidas-1-button').removeClass('ui-btn-icon-right');  
        // console.log('pagecontainerbeforeshow'); 

        if ( !$('#medidas-1-button').hasClass('ui-btn-icon-right') )
        { 
//            console.log('no existe la clase');
        } 
      // console.log('pagecontainerbeforeshow'); 
      // eliminarFlechasDSelect 
     //  redimensionarAltoDConversorDMedidas

   });

    $(document).on('pagecreate', function (evt) 
    { 

      $('#medidas-1-button').removeClass('ui-btn-icon-right');  

      if ( !$('#medidas-1-button').hasClass('ui-btn-icon-right') )
      { 
        //  console.log('no existe la clase');
      } 
        //console.log('pagecreate'); 
        eliminarFlechasDSelect();  
  //redimensionarAltoDConversorDMedidas

    }); 

      $(document).on('pagecontainerhide', function (evt,data) 
      { 
         // console.log('pagecontainerhide');

         // $('#medidas-1-button').removeClass('ui-btn-icon-right');  
         // console.log('pagecontainerhide');
           eliminarFlechasDSelect(); 
         //  redimensionarAltoDConversorDMedidas


         if ( !$('#medidas-1-button').hasClass('ui-btn-icon-right') )
         { 
           // console.log('no existe la clase');
         } 
      });

      $(document).on('pagecontainershow', function (evt,data) 
      { 
         //  eliminarFlechasDSelect(); 
          //console.log('pagecontainershow'); 

          if( !$('#medidas-1-button').hasClass('ui-btn-icon-right') )
          { 
           // console.log('no existe la clase');          
          }  

     // redimensionarAltoDConversorDMedidas

      });

 $(document).ready(function () 
      { 
        //alert('ready!!!!!!');

         crearLasRuletasDMedidas();
         redimensionarAltoDConversorDMedidas();

         
         setTitulo(); 
         console.log('ready'); 

        $('.valor').click(function()
         {
             /*
                valor=$('#medidas-1').val(); 
                text=$('#medidas-1 option:selected').text(); 
                 alert('valor:'+valor+',text:'+text); 
             */

/*
            ulMedidas = $('#uipv_ul_medidas-1'); 
            console.log('ulMedidas=>'+ulMedidas);
            console.log('ulMedidas.position.top=>' + ulMedidas.position().top);
            console.log('ulMedidas.position.left=>' + ulMedidas.position().left);
            */

            lis=$('#uipv_ul_medidas-1').find('li'); 
            console.log('li.length=>'+lis.length);

            
            for(k=0;k<lis.length;k++)
            {
              console.log('k=>'+k);

               // if(!isNaN(k)) 
               {
                  console.log(lis[k]);
                  console.log('lis[k].position().top=>'+$(lis[k]).position().top);
                  console.log('lis[k].text()=>'+$(lis[k]).text());
                  //console.log('lis[k].position().left=>'+lis[k].position().left); 
               }

            }

         })   
      }); 
     function crearLasRuletasDMedidas()
     {
        $('#medidas-1').iPhonePicker({ width: '90px', imgRoot: '' }); 
        $('#medidas-1-button > span').css({'display':'none'}); 
        $('#medidas-2').iPhonePicker({ width: '90px', imgRoot: '' }); 
        $('#medidas-2-button > span').css({'display':'none'});  
     }

     function eliminarFlechasDSelect()
     {    
         $('#medidas-1-button').removeClass('ui-btn');   
         $('#medidas-1-button').removeClass('ui-btn-icon-right'); 
         $('#medidas-1-button').removeClass('ui-shadow');

         $('#medidas-2-button').removeClass('ui-btn');   
         $('#medidas-2-button').removeClass('ui-btn-icon-right');   
         $('#medidas-2-button').removeClass('ui-shadow'); 
     }
               
     function setTitulo()
     {
        $('#toolbar .titulo-dashboard').text('Conversor de Medidas'); 
     }

     function redimensionarAltoDConversorDMedidas()
     {

       height=screen.height; 
       heightToolbar=$('body #toolbar').height(); 

       // console.log('heightToolbar:'+heightToolbar); 
      // heightUiContent=$('#conversor-d-medidas-page .ui-content').height()

       //heightUiContent=$('#conversor-d-medidas-page').height() 

      // console.log("heightUiContent=>"+heightUiContent);  
      // hhh = $('#conversor-d-medidas-page .ui-content').height();


      heightUiContent=height-heightToolbar; 
      $('#conversor-d-medidas-page .ui-content').css({'height':heightUiContent+'px'});
        

      //heightUiContent=$('#conversor-d-medidas-page .ui-content').height() 

      // console.log(" heightUiContent=>"+heightUiContent); 

      // heightUiContent=$('#conversor-d-medidas-page .ui-content')
      // alert(' redim!!!! '); 
      // heightUiContent=$('#conversor-d-medidas-page')
      // console.log(heightUiContent);

      //console.log('heightUiContent:'+heightUiContent);


      // heightForm=$('#homepage form').height();        
      // heightTablero1=height-(heightToolbar+heightForm); 

      // $('#homepage .ui-content').css('height',heightTablero1+'px'); 
      // $('#homepage .ui-content .capa-tablero-1').css('height',heightTablero1+'px'); 

     }
