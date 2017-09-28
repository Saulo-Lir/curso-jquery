$(function(){
    
    //Seleciona os links que tenha a classe .galeria
    $('a.galeria').bind('click', function(){
        
                 // Seleciona o link <a>, acha a imagem, coleta o endereço contido no atributo src 
        var img = $(this).find('img').attr('src');
        
        // Aplicar a imagem selecionada na próxima div
        $('.fotobox img').attr('src', img);
        
        $('.bgbox, .fotobox').fadeIn('fast');
        
    });
    
    // Seleciona esses 3 elementos e aplica o efeito
    $('.bgbox, .fotobox, button').bind('click',function(){
        
        $('.bgbox, .fotobox').fadeOut('fast');
    
    });
    
    
});