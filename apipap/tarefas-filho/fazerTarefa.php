<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);


$id = @$postjson['id'];
$pontos = $postjson['pontos'];
$idTarefa = @$postjson['idTarefa'];


$query = $pdo->query("SELECT TarefaRealizada from tarefa where idTarefa = $idTarefa");
$res = $query->fetchAll(PDO::FETCH_ASSOC);

if (intVal($res[0]['TarefaRealizada']) == 1) {

    echo json_encode(array('mensagem' => 'Esta tarefa já foi realizada!'));
    exit();
}

$res = $pdo->prepare("UPDATE utilizadorfilho SET Pontos = (:pontos + Pontos) WHERE idutilizadorFilho = :id");
$res->bindValue(":id", $id);
$res->bindValue(":pontos", $pontos);
$res->execute();

$res1 = $pdo->prepare("UPDATE tarefa SET TarefaRealizada = 1, DataRealizacao = curdate() WHERE IdTarefa = :idTarefa");
$res1->bindValue(":idTarefa", $idTarefa);
$res1->execute();

$result = json_encode(array('mensagem' => 'Tarefa realizada com sucesso', 'ok' => true));
echo $result;