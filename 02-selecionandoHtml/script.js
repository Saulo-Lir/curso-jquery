$(function(){
   //Selecionando elementos html
   
   $('button'); // Seleciona todas as tags que possuem esse nome
   $('#botao2'); // Seleciona um elemento específico através de seu id
   $('.botao3'); // Seleciona um elemento ou elementos através da classe
   $('li.botao3'); // Seleciona todas as tags li que possuem a classe botao3
   $('.lista2 li.botao3'); // Seleciona todas as tags li que possuem a classe botao3 e que estão dentro da classe lista2 
   $('ul.lista2 li.botao3') //Seleciona todas as tags li que possuem a classe botao3 e que estão dentro da classe ul que possuem a classe lista2
                          
                          
    // Inserir item html numa variável
    
    var item = $('.lista2 li.botao3');
    
});
