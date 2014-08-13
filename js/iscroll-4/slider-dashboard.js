var myScroll;  

function loaded() 
{ 
  myScroll = new iScroll('slider-dashboard',
  {
    snap: true,
    momentum: false,
    hScrollbar: false,
    onScrollEnd: function()
    {
       document.querySelector('#homepage #indicator-home > li.active').className = '';
       document.querySelector('#homepage #indicator-home > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
    } 
   });
}

document.addEventListener('DOMContentLoaded', loaded, false); 


$(document).on('pagecontainerbeforeshow', function (evt,data) 
{ 
   lis=$('#homepage #slider-dashboard #scroller-home ul li'); 
   cantLis=lis.length; 

   if ( lis!=null && cantLis>0)
   { 
     _width=screen.width;

     $('#homepage #slider-dashboard').css({'width':_width+'px'});
     $('#homepage #slider-dashboard #scroller-home li').css({'width':_width+'px'}); 
     $('#homepage  #nav-home').css({'width':_width+'px'}); 

     _width=_width*cantLis;
     $('#homepage #slider-dashboard #scroller-home').css({'width':_width+'px'}); 

     widthLi=$('#homepage  #nav-home ul li').width();

     borderLi=$('#homepage  #nav-home ul li').css('border-radius'); 
     borderLi=borderLi.split('px')     
     borderLi=borderLi.length==0 ? 0 : borderLi[0];
     borderLi=parseInt(borderLi);

     marginRigthLi=$('#homepage  #nav-home ul li').css('margin-right'); 
     marginRigthLi=marginRigthLi.split('px')     
     marginRigthLi=marginRigthLi.length==0 ? 0 : marginRigthLi[0];
     marginRigthLi=parseInt(marginRigthLi); 

     widthLi+=borderLi+marginRigthLi; 
     _width=widthLi*cantLis; 
     
     $('#homepage  #nav-home #indicator-home').css('width',_width+'px');

   } 
});

