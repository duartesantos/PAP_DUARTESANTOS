<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$nome = $postjson['nome'];
$mail = $postjson['mail'];
$senha = $postjson['senha'];

$id = @$postjson['id'];
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
    $query_con = $pdo->prepare("SELECT * from utilizadorpai WHERE MailPai = :mail");
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
    $query_con = $pdo->prepare("SELECT * from utilizadorpai WHERE NomePai = :nome");
    $query_con->bindValue(":nome", $nome);
    $query_con->execute();
    $res_con = $query_con->fetchAll(PDO::FETCH_ASSOC);
    if (@count($res_con) > 0) {
        echo json_encode(array('mensagem' => 'Nome já registado!'));
        exit();
    }
}


if ($id == "") {

    $res = $pdo->prepare("INSERT INTO utilizadorpai SET NomePai = :nome, MailPai = :mail, Senha = :senha");

}


$res->bindValue(":nome", $nome);
$res->bindValue(":mail", $mail);
$res->bindValue(":senha", $senha);
$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso', 'ok' => true));
echo $result;
