$(function (){
    // Mudar os elementos html
    $('#teste').html('texto mudado');
    
    // No console, para mostrar o conteúdo do elemento
    // selecionado, aplicamos a função html sem nenhum parâmetro
    // $('#teste').html();
    
    //$('#div2').html('Substitui todos os elementos');
    
    // Adicionando uma classe css num elemento html
    $('#div2 button').addClass('estilo');
    // Ou $('#div2').find('button').addClass('estilo');
    
    $('#div2 button').html('Novo nome do Botão');
    
});