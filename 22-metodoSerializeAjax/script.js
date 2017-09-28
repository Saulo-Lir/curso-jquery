$(function(){
    
    $('#form').bind('submit', function(e){
        e.preventDefault();
        
        // serialize: Pega todos os dados preenchidos e não preenchidos do formulário
        // e os formata de forma a facilitar o envio pelo ajax
        
        var txt = $(this).serialize();
        console.log(txt);  
        
    });
    
});
