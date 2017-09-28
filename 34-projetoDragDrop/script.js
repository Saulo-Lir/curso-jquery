$(function(){
    
    $('#objeto').bind('mousedown',function(){
    
        $('#objeto').bind('mousemove', function(e){ // Recebe o próprio evento como parâmetro
            var x = e.originalEvent.pageX; // Posição left
            var y = e.originalEvent.pageY; // Posição top
            
            var width = $(this).width();
            var height = $(this).height();
            
            $(this).css('left', (x - (width / 2))+'px');
            $(this).css('top', (y - (height / 2))+'px');
            
        });
        
    });
    
    $('#objeto').bind('mouseup', function(){
        
        $('#objeto').unbind('mousemove'); // Remove a relação do elemeto com mousemove
                                          // estacionando ele no posição do página em que estiver  
    });
    
});