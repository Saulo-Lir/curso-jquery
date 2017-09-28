
var vez = 'o';

function atualizarPlacar(){
    if(vez == 'o'){
        $('.placar img').attr('src', 'icones/o.png');
    }else{
        $('.placar img').attr('src', 'icones/x.png');
    }
}

function verificarCampeao(){
    var a1 = $('.a1').attr('data-marcado');
    var a2 = $('.a2').attr('data-marcado');
    var a3 = $('.a3').attr('data-marcado');
    
    var b1 = $('.b1').attr('data-marcado');
    var b2 = $('.b2').attr('data-marcado');
    var b3 = $('.b3').attr('data-marcado');
    
    var c1 = $('.c1').attr('data-marcado');
    var c2 = $('.c2').attr('data-marcado');
    var c3 = $('.c3').attr('data-marcado');
    
    var ganhador = '';
    
    for(var i=0;i<=1;i++){
        if(i == 0){
            var jogada = 'o';
        }else{
            var jogada = 'x';
        }
        
        // Verificando todas as 8 possíveis formas de ganhar o jogo
        
        if(a1 == jogada && b1 == jogada && c1 == jogada){
            ganhador = jogada;
        }
        else if(a2 == jogada && b2 == jogada && c2 == jogada){
            ganhador = jogada;
        }
        else if(a3 == jogada && b3 == jogada && c3 == jogada){
            ganhador = jogada;
        }
        else if(a1 == jogada && a2 == jogada && a3 == jogada){
            ganhador = jogada;
        }
        else if(b1 == jogada && b2 == jogada && b3 == jogada){
            ganhador = jogada;
        }
        else if(c1 == jogada && c2 == jogada && c3 == jogada){
            ganhador = jogada;
        }
         else if(a1 == jogada && b2 == jogada && c3 == jogada){
            ganhador = jogada;
        }
         else if(a3 == jogada && b2 == jogada && c1 == jogada){
            ganhador = jogada;
        }     
    }
    
    if(ganhador != ''){
            if(ganhador == 'o'){
                alert('O GANHADOR FOI: O');
            }else{
                alert('O GANHADOR FOI: X');
            }
        
        // Zerando o jogo
        $('.area').html(''); // Zera o conteúdo das divs
        $('.area').attr('data-marcado', '');
        
        }
        else if(a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != ''){
            alert('EMPATE!');
        
             // Zerando o jogo
             $('.area').html(''); // Zera o conteúdo das divs
             $('.area').attr('data-marcado', '');
        }
    
}

$(function(){
    
    atualizarPlacar();
    
    $('.area').bind('click', function(){
        
        // Verificar se na área clicada já existe uma imagem
        // Assim, será evitado mudar a imagem caso já exista uma
        if($(this).find('img').length == 0){
            
            if(vez == 'o'){
                $(this).html('<img src="icones/o.png" height="50"/>' );
                $(this).attr('data-marcado','o');
                vez = 'x';
            }else{
                $(this).html('<img src="icones/x.png" height="50"/>' );
                $(this).attr('data-marcado','x');
                vez = 'o';
            }
            
            atualizarPlacar();
            
            verificarCampeao();
            
        }
        
    });
    
    
});



