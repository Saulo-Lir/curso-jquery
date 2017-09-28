// 1) Verificar se um elemento existe na tela

//Modo errado!

if($('#algo')){ // Qualquer seleção com jquery $() irá retornar um array.
                //Mesmo que não se encontre o elemento especificado,
                //irá ser retornado um array vazio, que ainda sim é um valor
                // Então o if irá identificar como verdadeiro, gerando um falso positivo
    alert('Existe');
}else{
    alert('Não Existe');
}

//Modo Correto!

if($('#algo').length > 0){ // Se o array for maior que 0, então o elemento existe
    alert('Existe');
}else{
    alert('Não Existe');
}


// 2) Saber se um elemento possui uma classe específica

if($('input').hasClass('inputext')){
    alert('Tem a classe');
}else{
    alert('Não tem a classe');
}


// 3) Ativar ou desativar um elemento de form

//Desativar
$('#nome').attr('disabled','disabled');

//Ativar
$('#nome').removeAttr('disabled');

//Desativar
$('#salvo').attr('disabled','disabled');

//Ativar
$('#salvo').removeAttr('disabled');

//Deixar o checkbox selecionado

$('#salvo').attr('checked','checked');

// Remover o atributo de checked

$('#salvo').removeAttr('checked');


// 4) Pegar o item selecionado do SELECT

$('#idade').val();

// Selecionar automaticamente um valor

$('#idade').find('option').eq(1).attr('selected','selected');


// 5) Alterar o 3o elemento da lista

$('li').eq('2').html('Elemento alterado!').css('color','green');

//remover o 7o item
$('li').eq('6').remove();

// 6) Pegar um elemento com jquery e aplicar funções nativas do javascript

//Retorna um array
$('li').eq('0');

//Retorna apenas o elemento nativo
$('li').eq('0')['0'];

//Forma direta
$('li')[0];

//Utilizando método nativo javascript

$('li')['0'].innerHTML = 'Alterado com método nativo!';


