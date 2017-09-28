$(function(){
    
    $('#form').bind('submit', function(e){
        e.preventDefault();
        
        var txt = $(this).serialize();
        console.log(txt);
        
        //Requisição completa ajax (A ordem dos parâmetros não importa)
        $.ajax({
            type: 'POST',    // Ou GET
            url: 'ajax.php', //Arquivo que vai processar as informações e envia-las de volta
            data: txt,      // Arquivos coletados do formulário
            success:function(resultado){ // Função que recebe como parametro os arquivos processados com sucesso e os exibe
                $('.div').html('Resultado: '+resultado);
            },
            error:function(){ // Caso ocorra algum erro, essa função é ativada (Opcional)
                alert('Ocorreu um erro!');
            }
            
        });
    });
    
});