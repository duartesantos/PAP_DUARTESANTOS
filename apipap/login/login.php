<?php
require_once('../conexao.php');
$postjson = json_decode(file_get_contents('php://input'), true);

$utilizador = $postjson['utilizador'];
$senha = $postjson['senha'];
$tipoUtilizador= $postjson['tipoUtilizador'];


if ($utilizador == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Utilizador!'));
    exit();
}


if ($senha == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Senha!'));
    exit();
}

if ($tipoUtilizador == "") {
    echo json_encode(array('mensagem' => 'Preencha o Campo Tipo de Utilizador!'));
    exit();
}

if ($tipoUtilizador == "filho") {

    $query_con = $pdo->prepare("SELECT * from utilizadorfilho WHERE (MailFilho = :utilizador or NomeFilho = :utilizador) and Senha = :senha");
    $query_con->bindValue(":utilizador", $utilizador);
    $query_con->bindValue(":senha", $senha);

    $query_con->execute();
    $res = $query_con->fetchAll(PDO::FETCH_ASSOC);
    if (@count($res) > 0) {

        $dados = array(
            'id' => $res[0]['idutilizadorFilho'],
            'nome' => $res[0]['NomeFilho'],
            'mail' => $res[0]['MailFilho'],
            'senha' => $res[0]['Senha'],
            'tipoUtilizador' => $res[0]['TipoUtilizador'],  
            'pontos' => $res[0]['Pontos'],  

        );

        $result = json_encode(array('mensagem' => 'Salvo com sucesso', 'ok' => true, 'util'=>$dados));
        echo $result;
    } else {
        $result = json_encode(array('mensagem' => 'Dados incorretos', 'ok' => false));
        echo $result;
    }
}


if ($tipoUtilizador == "pai") {

    $query_con = $pdo->prepare("SELECT * from utilizadorpai WHERE (MailPai = :utilizador or NomePai = :utilizador) and Senha = :senha");
    $query_con->bindValue(":utilizador", $utilizador);
    $query_con->bindValue(":senha", $senha);

    $query_con->execute();
    $res = $query_con->fetchAll(PDO::FETCH_ASSOC);
    if (@count($res) > 0) {

        $dados = array(
            'id' => $res[0]['idutilizadorPai'],
            'nome' => $res[0]['NomePai'],
            'mail' => $res[0]['MailPai'],
            'senha' => $res[0]['Senha'],
            'tipoUtilizador' => $res[0]['TipoUtilizador'],  

        );

        $result = json_encode(array('mensagem' => 'Salvo com sucesso', 'ok' => true, 'util'=>$dados));
        echo $result;
    } else {
        $result = json_encode(array('mensagem' => 'Dados incorretos', 'ok' => false));
        echo $result;
    }
}