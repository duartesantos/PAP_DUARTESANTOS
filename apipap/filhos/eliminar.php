<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id'];

$res = $pdo->query("DELETE FROM utilizadorfilho where idutilizadorFilho = '$id'"); 

$result = json_encode(array('mensagem' => 'Eliminado com Sucesso', 'ok' => true));
echo $result;
