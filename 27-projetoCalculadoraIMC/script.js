$(function(){
    
    $('button').bind('click',function(){
        
        var altura = $('#altura').val();
        var peso = $('#peso').val();
        
        altura = altura.replace(',','.'); // Troca a vírgula por ponto
        peso = peso.replace(',','.');
        
        var imc = peso / (altura * altura);
        
        
        if(imc < 16){
            var resultado = 'Baixo peso muito grave';
            
        }else if(imc >= 16 && imc <= 16,99 ){
            var resultado = 'Baixo peso grave';
            
        }else if(imc >=17 && imc <= 18,49){
            var resultado = 'Baixo peso';
            
        }else if(imc >= 18,50 && imc <= 24,99){
            var resultado = 'Peso normal';
            
        }else if(imc >= 25 && imc <= 29,99){
            var resultado = 'Sobrepeso';
            
        }else if(imc >= 30 && imc <= 34,99){
            var resultado = 'Obesidade Grau I';
            
        }else if(imc >= 35 && imc <= 39,99){
            var resultado = 'Obesidade Grau II';
            
        }else{
            var resultado = 'Obesidade Grau III';
        }   
        
        $('#resultado').html('Seu IMC é: '+imc+' kg/m² - Resultado: '+resultado);
             
    });    
    
});