$(function(){
    
    var horaEscolhaCampo;
    
    $('input').bind('focus', function(){
        
        // Selecionar a posição atual em que está o campo focado
        var posicao = $(this).offset(); // Retorna um array com duas propriedades: top, left - Horizonatal, Vertical
        var largura = $(this).width(); // Seleciona a largura do campo
        
        $('.horaescolha').css('left', posicao.left + largura + 5); // Vai posicionar o elemento no lado direito do campo
        $('.horaescolha').css('top',posicao.top); // Vai posicionar o elemento na mesma altura do campo
        $('.horaescolha').show();
        
        horaEscolhaCampo = $(this);
    });
    
    $('input').bind('blur', function(){
        
       // Atrasar o tempo de saída da div da tela
       // Dessa forma será possível clicar no botão
       
       setTimeout(function(){
         
         $('.horaescolha').hide();
        
        }, 200); // 200 milisseundos ou 2 segundos
           
    });
    
    // Preenchendo o campo com a hora selecionada
    $('.horaescolha button').bind('click', function(){
        
        var hora = $(this).html();
        horaEscolhaCampo.val(hora);
        
    });
    
});