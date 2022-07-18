<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$nome = $postjson['nome'];
$pontos = $postjson['pontos'];//erro
$quantidade = $postjson['quantidade'];//erro

$idLogado = $postjson['idLogado'];
$id = @$postjson['id'];



if ($nome == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Nome!'));
    exit();
}



if ($pontos == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Pontos!'));
    exit();
}


if ($quantidade == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Quantidade!'));
    exit();
}


if ($id == "") {

$res = $pdo->prepare("INSERT INTO produto SET NomeProduto = :nome, PontosProduto = :pontos, 
QuantidadeProduto = :quantidade, UtilizadorPai_idutilizadorPai = $idLogado"); //mudar o id do filho por uma variavel----------------

} else {

$res = $pdo->prepare("UPDATE produto SET NomeProduto = :nome, PontosProduto = :pontos,
QuantidadeProduto = :quantidade WHERE idproduto = :id");
$res->bindValue(":id", $id);

}

$res->bindValue(":nome", $nome);
$res->bindValue(":pontos", $pontos);
$res->bindValue(":quantidade", $quantidade);

$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso', 'ok' => true));
echo $result;
