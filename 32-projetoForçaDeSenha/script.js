$(function(){
    
    $('#senha').bind('keyup', function(){
        
        var txt = $(this).val();
        var forca = 0;
        
        // Requisitos para senhas fortes:
        // letras (25%)
        // números (25%)
        // caracteres especiais (25%)
        // Mínimo de 6 caracteres (25%)
        // Totalizando 100% dos requisitos
        
       
        if(txt.length >= 6){
            forca += 25;
        }
        
        // Criando uma expressão regular instanciando a Classe
        
        var reg = new RegExp(/[a-z]/i); // Procura de a até z. O parâmetro i indica case insensitive, então
                                        // ele não irá diferenciar as letras minúsculas das maiúsculas
        
        if(reg.test(txt)){  // Testar se foi digitado algum texto
            forca += 25;    
        }
        
        var reg = new RegExp(/[0-9]/i);
        if(reg.test(txt)){  // Testar se foi digitado algum número
            forca += 25;    
        }
        
        var reg = new RegExp(/[^a-z0-9]/i); // ^ : Exclui da expressão tudas as letras e números, considerando
                                            // então apenas os caracteres especiais

        if(reg.test(txt)){  // Testar se foi digitado algum caractere especial
            forca += 25;    
        }
        
        switch(forca){
            case 25:
                $('#forca').html('Força: Fraca');
                break;
            case 50:
                $('#forca').html('Força: Normal');
                break;
            case 75:
                $('#forca').html('Força: Média');
                break;
            case 100:
                $('#forca').html('Força: Forte');
                break;
        }
        
    
    });
    
});
