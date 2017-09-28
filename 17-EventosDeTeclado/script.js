$(function(){
    //Pressionar tecla
    $('#texto').bind('keydown',function(){
        console.log('Tecla pressioanda');
    });
    
    //Soltar tecla
    $('#texto').bind('keyup',function(e){ //Parâmetro para acessar propriedades padrão do evento
    
        console.log('Tecla solta');
        console.log('A tecla é '+e.keyCode); //keyCode: identifica qual é o caractere
        
        if(e.keyCode == 13){
            var txt = $(this).val();
            console.log(txt);
            $(this).val(''); // Limpa o campo de texto
        }
        
    });    
});