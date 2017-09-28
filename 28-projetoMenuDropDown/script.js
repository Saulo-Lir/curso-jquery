$(function(){
    
    $('li').hover(function(){
        // Caso fosse selecionado diretamente o .menu2, sem antes selecionar
        // o próprio objeto (this), afetaria todos os .menu2
        $(this).find('.menu2').slideDown('low');
        
    },function(){
        $(this).find('.menu2').slideUp();
 
    });    
    

});