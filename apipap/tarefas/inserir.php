<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$nome = $postjson['nome'];
$descricao = $postjson['descricao'];//erro
$pontos = $postjson['pontos'];//erro

$id = @$postjson['id'];
$idFilho = @$postjson['idFilho'];


if ($nome == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Nome!'));
    exit();
}



if ($pontos == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Pontos!'));
    exit();
}

if ($idFilho == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Filho!'));
    exit();
}



if ($id == "") {

    $res = $pdo->prepare("INSERT INTO tarefa SET NomeTarefa = :nome, DescricaoTarefa = :descricao, 
    PontosTarefa = :pontos, UtilizadorFilho_idutilizadorFilho = :idFilho"); 

} else {

    $res = $pdo->prepare("UPDATE tarefa SET NomeTarefa = :nome, DescricaoTarefa = :descricao, PontosTarefa = :pontos,  UtilizadorFilho_idutilizadorFilho = :idFilho WHERE idTarefa = :id");
    $res->bindValue(":id", $id);
}


$res->bindValue(":nome", $nome);
$res->bindValue(":descricao", $descricao);
$res->bindValue(":pontos", $pontos);
$res->bindValue(":idFilho", $idFilho);

$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso', 'ok' => true));
echo $result;
