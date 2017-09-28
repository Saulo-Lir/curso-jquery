$(function(){
    
    // Mouse pressionado
    $('.botao').bind('mousedown',function(){
        console.log('Apertou o mouse');
    });
       
    //Mouse soltado   
    $('.botao').bind('mouseup',function(){
        console.log('Soltou o mouse');
    });
    
    //Movendo o mouse
    $('.botao').bind('mousemove',function(){
        console.log('Moveu o mouse');
    });
    
    //Identificando o mouse em cima do elemento (Diferente de mousemove)
    $('.botao').bind('mouseover',function(){
        console.log('O mouse está em cima');
        $(this).addClass('mouseEmCima');
    });
    
    //Identifica a saída do mouse de cima do elemento
    $('.botao').bind('mouseout',function(){
        console.log('Soltou o mouse');
        $(this).removeClass('mouseEmCima');
    });
    
    //Clique completo, mousedown e mouseup juntos
    $('.botao').bind('click',function(){
        console.log('Clique completo');
    });
    
    //Clique duplo
    $('.botao').bind('dblclick',function(){
        console.log('Clique duplo');
    });
    
    
});