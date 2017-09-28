$(function(){

    // Adiciona o elemento numa variável (Cria um novo objeto)
    var titulo = $('h1');
    
    // Usar os métodos do objeto
    titulo.html('Novo Título');
    
    //Criar um objeto de um elemento selecionado do html
    
    $(document.getElementById('div')).html('Texto novo ');
    
    //Ou
    var div2 = document.getElementById('div2');
    $(div2).html('Novo Texto 2');
    
    //Ou
    var div3 = $('#div3');
    div3.append('<br/>Texto 4');
    
    // Selecionar o segundo elemento da lista e criar um objeto jquery
    
    $('li:eq(1)'); //eq() = Os parâmetro começam da posição 0, então o 1 vai
                  //ser a segunda li
    //Ou
    $('li').eq(1);
    
    // Criando o objeto
    
    var li2 = $('li').eq(1);
    li2.html('Novo item 2');
       
    
});
