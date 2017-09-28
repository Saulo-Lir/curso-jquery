$(function(){

    //Mudar o atributo id
    $('#teste').attr('id','novoId');
    
    // O html() considera as tags html
    $('#teste').html('Esse é um texto em <strong>Negrito</strong>');
    
    // O text() considera o texto puro
    $('#teste2').text('Esse é um texto em <strong>Negrito</strong>');
    
    // Mudar atributo sem o attr
    $('#teste img').width(200);
    $('#teste img').height(100);
    
    // Adicionar valor no input
    $('input').val('Digite aqui seu texto');
    
    //Adicionar um elemento após outro já existente na página
    $('input').after('<div>Texto Após do elemento</div>');
    
    //Adicionar um elemento antes de outro já existente na página
    $('input').before('<div>TextoAntes do elemento</div>')
    
    //Acrescentar um item na lista
    $('ul').append('<li>Item 5</li>');
    
    // Acrescentar um item qualquer DENTRO de um elemento e após um item dentro desse elemento
    $('#teste').append('Texto qualquer adicionado');
    
    // Acrescentar um item DENTRO de um elemento e anterior a outro já existente nesse elemento
    $('ul').prepend('<li>Item 0</li>');
    
    // after() e before() adicionam EXTERNAMENTE
    // append() e prepend() adicionam INTERNAMENTE
    
    //Remover um elemento
    $('.form').remove();
       
    
});
