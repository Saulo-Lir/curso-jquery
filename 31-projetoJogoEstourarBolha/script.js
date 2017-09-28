
function addBola(){
    var x = Math.floor(Math.random() * 800); // Gera um número aleatório de 0 a 800 e tranforma em número inteiro
    var y = Math.floor(Math.random() * 500);
    var cor = Math.floor(Math.random() * 5); // Cores: azul, vermelo, amarelo, preto, verde
    
    //Criando a bola
    
    var bola = $('<div class="bola"></div>');
    bola.css('left', x+'px');
    bola.css('top', y+'px');
    
    // Mudando a cor da bola
    
    switch(cor){
        case 0:
            bola.css('background-color', 'blue');
            break;
        case 1:
            bola.css('background-color', 'red');
            break;
        case 2:
            bola.css('background-color', 'yellow');
            break;
        case 3:
            bola.css('background-color', 'black');
            break;
        case 4:
            bola.css('background-color', 'green');
            break;
    }
    
    // Efeito de desaparecer
    bola.bind('click', function(){
        
        $(this).fadeOut('fast');
   
   // Atualizar placar    
        placar++;
        atualizaPlacar();
    });
    
    $(document.body).append(bola); // Adiciona a bola no corpo da página
    
}

    var placar = 0;
    
function atualizaPlacar(){
    $('#placar').html(placar);
}


$(function(){
    
    $('#comecar').bind('click',function(){
    
        setInterval(addBola, 1000);  // Executa a função addBola a cada 1 segundo
        
        
        
    });
    
});