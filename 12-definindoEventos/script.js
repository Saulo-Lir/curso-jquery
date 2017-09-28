
// Criando eventos 

$(function(){
     
   $('button').click(function(){ // Executa a função quando o usuário clicar no elemento selecionado
                                
        alert('Clicou nesse botão');
        if($(this).hasClass('fundovermelho')){ // Se o objeto selecionado tem a classe fundovermelho
            $(this).removeClass('fundovermelho'); // Pega o próprio objeto selecionado e remove a classe
        }else{
            $(this).addClass('fundovermelho'); // Pega o próprio objeto selecionado e adiciona a classe
        }
       
        // Forma mais prática para o código acima
        
        $(this).toggleClass('fundovermelho'); // Alternância de classe. Adiciona e remove a classe conforme
                                              // o evento é acionado
         
    });
   
   // Passar e tirar o mouse de cima
  
   $('button').mouseover(function(){
        $(this).addClass('fundovermelho');
    });
   
   $('button').mouseout(function(){
        $(this).removeClass('fundovermelho');
   });
   
   // Forma mais prática para o codigo acima
   
   $('button').hover(function(){
       //Quando o mouse entrar na área do elemento (mouseover)
       $(this).addClass('fundovermelho');
    }, function(){
        //Quando o mouse sair da área do elemento (mouseout)
        $(this).removeClass('fundovermelho');
    });
   
   //Ou
   
   $('button').hover(function(){
        $(this).toggleClass('fundovermelho');
    });
   
   
   // Outra forma de adicionar eventos (Mais usuais)
   
   $('button').bind('click',function(){
         
   });
   
   //Ou
   
   $('button').on('click', function(){
      
   });
   
   
   //Removendo eventos
   
   $('button').unbind('click');
   
   //Ou
   
   $('button').off('click');
   
   // Se não for passado nenhum parâmetro no off(), serão removidos todos os eventos
   
   
});
