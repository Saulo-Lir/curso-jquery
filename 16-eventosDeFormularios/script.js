$(function(){
    
    //Eventos de submit
    $('#form').bind('submit',function(e){ // submit: Quando o botão submit for acionado, o evento é executado
        e.preventDefault();
        console.log('O formulário não foi enviado');
    });
    
    //Eventos de seleção de texto
    $('#texto').bind('select',function(){ //select: Quando algum texto for selecionado no campo, ele executa o evento
        console.log('Algo foi selecioando');
    });
    
    //Eventos de focus (Cursor do mouse focado no campo do formulário)
      //Selecionando 2 elementos  
    $('#texto, #email').bind('focus', function(){ //focus: elemento focado
        $(this).addClass('focado');
    });

    $('#texto, #email').bind('blur',function(){ //blur: elemento desfocado
        $(this).removeClass('focado');  
    });
    
    //Eventos de change (mudança de opções no input select)
    
    $('#idade').bind('change',function(){
        console.log($(this).val());
    })
    
    //change: Funciona também para checkbox e radio
    
});