$(function(){
    //Utilizando o plugin conforme sua documentação
    $('#data').mask('00/00/0000'); //mask: Função do plugin
    $('#hora').mask('00:00:00');
    $('#cpf').mask('000.000.000-00',{reverse:true});
    $('#tel').mask('(00) 00000-0000');

});