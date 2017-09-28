// Iniciando o jquery
//$(elemento).acao

$(document).ready(function(){
    alert('Documento carregado!');
});

// Forma reduzida

$(function(){
    alert('Documento carregado!');
});

// Criando a função antes

function carregar(){
    alert('Documento carregado!!');
}

$(document).ready(carregar);

// Forma nativa

jQuery(document).ready(function(){
    alert ('Forma nativa...');
});


// Evitando conflito com outras bibliotecas

var $j = jQuery.noConflict();

$j(document).ready(function(){
    alert('Documento carregado!');
});




