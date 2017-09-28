<?php

// Recebe os dados, calcula a quantidade de caracteres do nome e retorna esses valores

$nome = $_POST['usuario'];
$senha = $_POST['senha'];

$array = array('status' => '');

if($nome == 'morgoth' && $senha == '123'){
    $array('status') = 'OK';
}

echo json_encode($array);

?>
