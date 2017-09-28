// Seleciona o elemento anterior ao da classe filha
// No caso, a classe subtopo

$('.filha').parent();

// Seleciona o elemento 2x anterior ao da classe filha
// No caso, a classe topo

$('.filha').parent().parent(); // E assim sucessivamente

// Processo inverso: Navegar da classe site para classe filha

// 1)
$('.filha');

// 2)
$('.site').find('.filha');

// 3)
$('site').find('.topo').find('.subtopo').find('.filha');

// Selecionar a primeira div

// 1)
$('body').find('div').eq('0');

// 2)
$('div').eq('0');

//Navegar da classe irmao até a classe site
// Supondo que exista outras classes que não sabemos entre essas divs

$('irmao').closest('.site'); // closest: função que acha o elemento mais próximo que
                            //foi informado no parâmetro
                            
// Navegar da classe irmao até conteudo: Primeiro voltamos até a site,
// pois ela contem a classe conteudo, e a partir dela achamos a classe conteudo

$('.irmao').closest('.site').find('.conteudo');
                            
