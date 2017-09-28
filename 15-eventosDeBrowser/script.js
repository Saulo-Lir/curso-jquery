// Eventos de Browser

$(function(){
    // Eventos de scroll (Rolagem da tela)
    
    $('#div').bind('scroll', function(){
            console.log('Scroll');
            $(this).css('background-color','green');
    });
    
    // Eventos de resize (redimensionamento da tela)
    
    $(window).bind('resize',function(){
        console.log('Mudou o tamanho da tela');
    });
    
});