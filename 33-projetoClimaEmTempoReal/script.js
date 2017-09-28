
// Mostrando o clima da uma determinada cidade em tempo real usando a API do Yahoo

$(function(){
    
    $('button').bind('click', function(){
        
        var cidade = $('#cidade').val();
        
        var now = new Date(); // Precisamos mandar a data atual para a url do yahoo
        
        // Montando a string da url da API
        var tempURL = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() + '&diagnostics=true&callback=?&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+cidade+'") and u="c"';  
         // u="c" : Retorno em graus celsius
                                              
                                               
                                                
        // Montando a requisição ajax
        
        $.ajax({
            url: encodeURI(tempURL), //encodeURI: Substitui os espaços em branco da string por caracteres especiais de url, como % ou & por exemplo
            dataType: 'json',
            type: 'GET',
            beforeSend: function(){ // Antes de enviar a requisição, irá mostrar na tela a mensagem
                
                $('#resultado').html('Carregando...');
            
            },
            success: function(data){
                // Estrutura de resposta da API do Yahoo
                
                if(data !== null && data.query !== null && data.query.results !== null && data.query.results.channel.description !== 'Yahoo! Weather Error') {
					
                    var temperatura = data.query.results.channel.item.condition.temp;
                    
                    // Mostrando a temperatura na tela
                    
                    $('#resultado').html(temperatura+' ° C');
                    
				}
            },
            error: function(){
                $('#resultado').html('Erro!');
            }
        });
        
    });
    
});
