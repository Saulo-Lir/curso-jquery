$(function(){
    
    $('.botao').bind('click',function(){
       
        $('.div').animate({    // Parâmetros: Propriedades que vão ser animadas, duração da animação em milissegundos
          'margin-left':100,
          'margin-top': 20,
          'width': 500,
          'border-radius':75
        }, 1000); 
        
    });
   
    //Mudando o segundo parâmetro do animate
    // Se for informado apenas números no segundo parâmetro, o animate
    //irá entender que se trata do tempo de duração
    // Porém, se for adicionado o json, será aplicado as novas propriedades
   
    $('.botao').bind('click',function(){
       
        $('.div').animate({    
          'margin-left':100,
          'margin-top': 20,
          'width': 500,
          'border-radius':75
        }, {
            duration: 1500,
            step: function(){ // A cada pixel, movivento, animação, etc, ela é executada 
              console.log('Nova etapa...');
            },
            complete: function(){ // Executa quando a animação terminar
                console.log('Animação finalizada');
            },
            start: function(){ // Executa quando a animação começar
                console.log('Animação começou');
            }
            
            // A ordem das funções step, complete e start não importa
        }); 
        
    });
    
    // Parar uma animação no meio
    
    $('#btn').bind('click', function(){
        $('.div').animate({
           'margin-left': 500
        }, 2000);
    });
    
    $('#btn-2').bind('click', function(){
        $('.div').stop(); // Interrompe a animação
    });
    
    // Somar propriedades na animação
    
    $('#btn').bind('click', function(){
        $('.div').animate({
           'margin-left': '+=50' // Dessa forma, sempre será adicionado 50px ao valor atual
        }, 500);
    });
    
    $('#btn-2').bind('click', function(){
        $('.div').animate({
           'margin-left': '-=50' // Dessa forma, sempre será removido 50px do valor atual
        }, 500);
    });

});