$(function(){
    //Seleciona a tag <a>, chama a função attr que recebe o atributo
    // que se quer alterar, seguido do valor que será colocado nesse atributo

                //Atributo,valor
    $('a').attr('href','http://google.com.br');
    $('img').attr('src','http://www.google.com.br/google.jpg');
    $('img').attr('width','100');
    $('img').attr('border','5');
    
    // No console, para mostrar as propriedades de um elemento,
    // basta aplicarmos a função com apenas 1 parâmetro
    // $('img').attr('border');
    
});
