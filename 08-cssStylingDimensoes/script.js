// Adicionar uma classe ao elemento

$('h1').addClass('fundoVermelho');

$('input').addClass('campoTexto');

//Remover classe
$('h1').removeClass('fundoVermelho');

//Verificar se um elemento possui uma classe específica

if($('h1').hasClass('fundoVermelho')){ //hasClass = Retorna true ou false
    alert('Verdadeiro');
}else{
    alert('Falso');
}

//Aplicar um css diretamente num elemento

$('h1').css('color','#0000FF'); // css(): Possui 2 parâmetros, o atributo e o valor
$('h1').css('font-size','15px');
$('button').css('border','1px solid #000').css('background-color','#FF0000').css('color','#FFF');





