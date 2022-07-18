<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$nome = $postjson['nome'];
$mail = $postjson['mail'];
$senha = $postjson['senha'];
$id = @$postjson['id'];
$idLogado = @$postjson['idLogado'];

$antigo = @$postjson['antigo']; //mail
$antigo2 = @$postjson['antigo2']; //nome



if ($nome == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Nome!'));
    exit();
}

if ($mail == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Mail!'));
    exit();
}

if ($senha == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Senha!'));
    exit();
}



// EVITAR DUPLICIDADE NO MAIL
if ($antigo != $mail) {
    $query_con = $pdo->prepare("SELECT * from utilizadorfilho WHERE MailFilho = :mail");
    $query_con->bindValue(":mail", $mail);
    $query_con->execute();
    $res_con = $query_con->fetchAll(PDO::FETCH_ASSOC);
    if (@count($res_con) > 0) {
        echo json_encode(array('mensagem' => 'Mail já registado!'));
        exit();
    }
}


// EVITAR DUPLICIDADE NO NOME
if ($antigo2 != $nome) {
    $query_con = $pdo->prepare("SELECT * from utilizadorfilho WHERE NomeFilho = :nome");
    $query_con->bindValue(":nome", $nome);
    $query_con->execute();
    $res_con = $query_con->fetchAll(PDO::FETCH_ASSOC);
    if (@count($res_con) > 0) {
        echo json_encode(array('mensagem' => 'Nome já registado!'));
        exit();
    }
}



if ($id == "") {

    $res = $pdo->prepare("INSERT INTO utilizadorfilho SET NomeFilho = :nome, MailFilho = :mail, Senha = :senha, UtilizadorPai_idutilizadorPai = :idLogado "); //mudar o id do pai----------------
    $res->bindValue(":idLogado", $idLogado);

} else {

    $res = $pdo->prepare("UPDATE utilizadorfilho SET NomeFilho = :nome, MailFilho = :mail, Senha = :senha WHERE idutilizadorFilho = :id");
    $res->bindValue(":id", $id);
}


$res->bindValue(":nome", $nome);
$res->bindValue(":mail", $mail);
$res->bindValue(":senha", $senha);
$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso', 'ok' => true));
echo $result;
