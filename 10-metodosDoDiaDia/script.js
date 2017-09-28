// Salvando o valor da div

var valor = $('#algo').html(); // o html() salva o elemento com todas as bagunças de formatação

// Método  trim()

$.trim(valor); // Remove todas as bagunças de formatação ue foram salvas na variável

//Forma direta
var valor = $.trim($('#algo').html());

// Método each()

$('li').each(function(){ // Aplicao a função em cada 1 dos itens da lista
    alert($(this).html()); // Irá mostrar na tela cada item da lista
});

// Método type()

var idade = 90;
$.type(idade);  // Com javascript puro: typeof idade;

// Método isNumeric()

$.isNumeric(idade); // Verifica se a variável é numérica. Retorna true ou false

// Método isArray()

$.isArray(idade); // Verifica se a variável é um array. Retorna true ou false

// Método isFunction()

$.isFunction(idade); // Verifica se a variável é uma function. Retorna true ou false
