    
$(document).ready(function(){
    

    var onClass = 'on';
    var showClass = 'show';var n = 0;
    $('input').bind('focus',function(){
        $(this).prev('label').addClass(showClass);
        $(this).prev('label').addClass(onClass);
    });

    $('input').bind('blur',function(){
       $('input').prev('label').removeClass(showClass);
    });
 
    
})










