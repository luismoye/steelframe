/*
$(document).on('pagebeforecreate', function (evt) 
{});

  $(document).on('pagecreate', function (evt) 
  {
      
  }); 
*/ 
    $('ready',main) 
    function main()
    {
      // alert('herramientas!!!!')  
       setTitulo();  
       // vMouseOverUtilidades(); 
       vMouseDownUtilidades(); 
       vMouseOutUtilidades();  
      // btnClickConversorMedidas();

    //  setIconoToolBar(); 
    }

    function setTitulo()
    {
      $('#toolbar .titulo-dashboard').text('Utilidades'); 
    }
    function setIconoToolBar()
    {
       $('#toolbar .ui-icon-img-toolbar').css({'width':'10px','height':'17px'}); 
       $('#toolbar .ui-icon-inicio figure  img').attr('src','images/img-rd-flecha-atras.png'); 
    } 
    function vMouseOverUtilidades()
    {
        $('#herramientaspage .ui-content .ui-grid-a > div,'+
           '#herramientaspage .ui-content .ui-grid-b > div').on('vmouseover',function(e)
         {
            $(this).addClass('select-modulo-orange');
            $(this).find('p a').removeClass('color-no-select-modulo-orange');
            $(this).find('p a').addClass('color-select-modulo-orange'); 
         }); 
    }

    function vMouseDownUtilidades()
    {
        $('#herramientaspage .ui-content .ui-grid-a > div,'+
           '#herramientaspage .ui-content .ui-grid-b > div').on('vmousedown',function(e)
         {
            $(this).addClass('select-modulo-orange');
            $(this).find('p a').removeClass('color-no-select-modulo-orange');
            $(this).find('p a').addClass('color-select-modulo-orange');

         }); 
    }

   /* function vMouseUpUtilidades()
    {
        $('#herramientaspage .ui-content .ui-grid-a > div,'+
           '#herramientaspage .ui-content .ui-grid-b > div').on('vmouseup',function(e)
         {
            //$(this).addClass('select-modulo-orange');
            $(this).find('p a').removeClass('color-no-select-modulo-orange');
            $(this).find('p a').addClass('color-select-modulo-orange');

         }); 
    }
    */
    


    // vmousedown

    function vMouseOutUtilidades()
    {     
      $('#herramientaspage .ui-content .ui-grid-a > div,'+
        '#herramientaspage .ui-content .ui-grid-b > div ').on('vmouseout',function(e)
        {

           if($(this).hasClass('select-modulo-orange'))
           {
              $(this).removeClass('select-modulo-orange'); 
            } 

           $(this).find('p a').removeClass('color-select-modulo-orange');
           $(this).find('p a').addClass('color-no-select-modulo-orange'); 
        });
    }

    function btnClickConversorMedidas()
    {   
        $('#div-conversor-d-medida').click(function(e)
        { 

         // e.preventDefault() 
            aLink=$(this).find('a:eq(0)'); 
            aLink.click();

          // console.log(aLink) 
          // location.href="";
          // alert('#div-conversor-d-medida !!!!');  

        })
    }