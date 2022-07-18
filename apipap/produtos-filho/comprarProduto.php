<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);


$id = @$postjson['id'];
$pontos = intVal($postjson['pontos']);
$idProduto = @$postjson['idProduto'];
$pontosLogado = @$postjson['pontosLogado'];




//  $query = $pdo->query("SELECT Pontos FROM utilizadorfilho WHERE idutilizadorFilho = $id");
//  $res1 = $query->fetchAll(PDO::FETCH_ASSOC);

//  if ($pontos > $intVal($res1[0]['Pontos'])) {
//      echo json_encode(array('mensagem' => 'Saldo insuficiente!'));
//      exit();
//  }

if ($pontos > $pontosLogado) {
    echo json_encode(array('mensagem' => 'Saldo insuficiente!'));
    exit();
}


$query = $pdo->query("SELECT ProdutoComprado, QuantidadeProduto from produto where idproduto = $idProduto");
$res = $query->fetchAll(PDO::FETCH_ASSOC);

if (intVal($res[0]['QuantidadeProduto']) == intVal($res[0]['ProdutoComprado'])) {

    echo json_encode(array('mensagem' => 'Produto esgotado!'));
    exit();
}




$res = $pdo->prepare("UPDATE utilizadorfilho SET Pontos = (Pontos - :pontos) WHERE idutilizadorFilho = :id");
$res->bindValue(":id", $id);
$res->bindValue(":pontos", $pontos);
$res->execute();

$res1 = $pdo->prepare("UPDATE produto SET ProdutoComprado = ( ProdutoComprado + 1) WHERE IdProduto = :idProduto");
$res1->bindValue(":idProduto", $idProduto);
$res1->execute();

$res2 = $pdo->prepare("INSERT produto_has_utilizadorfilho SET produto_idproduto = $idProduto, utilizadorFilho_idutilizadorFilho = $id ");
$res2->bindValue(":idProduto", $idProduto);
$res2->execute();




// $res1 = $pdo->prepare("INSERT produto_has_utilizadorfilho ");
// $res1->bindValue(":idProduto", $idProduto);
// $res1->execute();
 

$result = json_encode(array('mensagem' => 'Salvo com sucesso', 'ok' => true));
echo $result;