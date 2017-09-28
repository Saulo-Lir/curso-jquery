$(function(){
    
    $('#form').bind('submit', function(e){
        e.preventDefault();
        
        var txt = $(this).serialize();
        console.log(txt);
        
        $.ajax({
        type: 'POST',
        url: 'ajax.php',
        data: txt,
        dataType: 'json', // Indica ao ajax que a resposta vai ser em json
        success: function(j){
            console.log(j);
            console.log('Meu nome é: '+j.usuario);
            console.log(j.status);
        }
            
        });
    });
    
});