$(function(){
    
    $('button').bind('click',function(){
        
        //Métodos auxiliares do ajax para carregar páginas

        //1)
        $('.div').load('teste.php');
        
        //2)
        $.get('teste.php',function(texto){ // Carrega a página, salva ela no parâmetro da função para poder ser usada
                                           
            $('.div').html(texto);
         
       });
       
       $.post('teste.php',function(texto){ 
                                          
            $('.div').html(texto);
         
       });
        
    });
    
});
