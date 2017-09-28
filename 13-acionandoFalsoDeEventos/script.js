
$(function(){
    
    //Adicionado um falso de evento
    $('#btn1').bind('click',function(){
        $('#btn2').trigger('click'); // Aciona o gatilho para disparar outro evento
                                     // Irá chamar o segundo método que exibe o alerta
    });
    
     
    $('#btn2').bind('click',function(){
        alert('Clicou no botão 2!');    
    });
    
});
