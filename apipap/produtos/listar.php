<?php
    require_once('../conexao.php');
    $postjson = json_decode(file_get_contents('php://input'), true);

	$limite = intVal($postjson['limit']);
    $start = intVal($postjson['start']);
	$idLogado = intVal($postjson['idLogado']);

    $busca = '%'.$postjson['nome'].'%';

    $query = $pdo->query("SELECT * from produto where NomeProduto like '$busca' and 
    utilizadorPai_idutilizadorPai = $idLogado and (QuantidadeProduto - ProdutoComprado) !=0 order by idproduto desc limit $start, $limite");

    $res = $query->fetchAll(PDO::FETCH_ASSOC);
	$total_reg = @count($res);
	if($total_reg > 0){     

        for($i=0; $i < $total_reg; $i++){
            foreach ($res[$i] as $key => $value){	}

            $dados[] = array(
                'id' => $res[$i]['idproduto'],
                'pontos' => $res[$i]['PontosProduto'],
                'nome' => $res[$i]['NomeProduto'],
                'quantidade' => $res[$i]['QuantidadeProduto'],
                'comprado' => $res[$i]['ProdutoComprado'],

            );

           

        }


        $result = json_encode(array('itens'=>$dados));
        echo $result;
    } else {
        $result = json_encode(array('itens'=>'0'));
        echo $result;
    }



?>