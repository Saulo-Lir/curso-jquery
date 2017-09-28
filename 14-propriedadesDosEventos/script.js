//Propriedades dos eventos

$(function(){
     //Interromper a função nativa de um objeto
     
    $('#botao').bind('click',function(e){
        e.preventDefault(); // Previne a ação padrão do objeto selecionado
                            // Como é um submit, irá prevenir dele ser enviado automaticamente
        
        var texto = $('#texto').val();
        alert(texto);
        
        alert(e.type); // type: Mostra qual evento aconteceu
        alert(e.target); // target: Mostra qual elemento html foi acionado
        alert(this); // Mesma coisa do target
        
    });
        
});

//Ou

function eventoDoBotao(e){
    e.preventDefault();
    alert(e.type);
}

$(function (){
    
    $('#botao').bind('click',eventoDoBotao);
    $('#botao').bind('mouseover',eventoDoBotao);
        
});





