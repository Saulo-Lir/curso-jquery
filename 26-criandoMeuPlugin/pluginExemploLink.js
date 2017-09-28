// Estrutura de criação do plugin

/*
(function($){

  $.fn.nomeDaFuncao = function(){
        Ações...    
  }
    
}(jQuery));

*/

(function($){
  
  //Indica ao JQuery que será criada uma nova extensão dele
  $.fn.showRealLink = function(){
    
    //this: Indica o(s) elemento(s) que sera(ão) selecionados
    //each: Irá rodar a função em cada um dos elementos
    
        this.each(function(){
            
            var link = $(this).attr('href'); // seleciona o próprio elemento, no caso o <a> junto com o conteúdo de href
            $(this).append(' ('+link+')'); // Adiciona ao próprio elemento, no caso o <a> o link pego anteriormente
            
        });
        
        return this; // Retorna o próprio objeto
  }
    
}(jQuery));




