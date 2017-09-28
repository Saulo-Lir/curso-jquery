
$(function(){
    // Fazer o elemento desaparecer 
      $('.div').hide();
      $('.div').hide('slow'); // Desapacere de forma lenta
      $('.div').hide('fast');// Desaparece de forma rápida
      $('.div').show();
      $('.div').show('slow'); //Aparece de forma lenta
      $('.div').show('fast');//Aparece de forma rápida
      
      $('.div').toggle; //Aplica a div de forma alternada
      $('.div').toggle('slow');
      $('.div').toggle('fast');
       
       // Aplicar efeito em conjunto com o botão
      
       $('.botao').bind('click', function(){
            $('.div').toggle('slow');
       });
     
    
       $('.botao').bind('click', function(){
            $('.div').slideToggle('fast'); //slideToggle: O elemento aparece/desaparece
                                          //de cima pra baixo e vice versa
       });
       
       // Fade (Diminui e aumenta a opacidade)
       
      $('.div').fadeOut();
      $('.div').fadeIn();
      $('.div').fadeTo('slow',0.5); // Indica qual o nível de opacidade vai ser usado. Varia de 0 a 1
      $('.div').fadeToggle(); // Alterna a aplicação do fade. Se o fade tiver ativo, ele some. Se não tiver, ele aparece.
      
      // Aplicando em conjunto com o botão      
      $('.botao').bind('click',function(){
            $('.div').fadeToggle('slow');                        
      });
       
  
      // Slide
      
      $('.div').slideUp(); // Elemento desaparece de baixo pra cima
      $('.div').slideDown(); // Elemento aparece de baixo pra cima
      $('.div').slideToggle(); // Alterna a aplicação do slide
      
      // Aplicando em conjunto com o botão      
      $('.botao').bind('click',function(){
            $('.div').slideToggle('slow');                        
      });
      
      // Aplicando no hellobar
      
      $('.hellobar').slideDown('slow');
      
      $('.hellobar').bind('click',function(){
            $(this).slideUp();
      });
  
});


