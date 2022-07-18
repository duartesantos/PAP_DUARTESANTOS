<?php
    require_once('../conexao.php');
    $postjson = json_decode(file_get_contents('php://input'), true);

	$limite = intVal($postjson['limit']);
    $start = intVal($postjson['start']);
	$idLogado = intVal($postjson['idLogado']);

    $busca = '%'.$postjson['nome'].'%';

// where id pai = utilizadorPai_iditiulizadorPai
    $query = $pdo->query("SELECT * from utilizadorfilho where (NomeFilho like '$busca' or MailFilho like '$busca') and 
    utilizadorPai_idutilizadorPai = $idLogado order by idutilizadorFilho desc limit $start, $limite");

    $res = $query->fetchAll(PDO::FETCH_ASSOC);
	$total_reg = @count($res);
	if($total_reg > 0){     

        for($i=0; $i < $total_reg; $i++){
            foreach ($res[$i] as $key => $value){	}

            $dados[] = array(
                'id' => $res[$i]['idutilizadorFilho'],
                'nome' => $res[$i]['NomeFilho'],
                'mail' => $res[$i]['MailFilho'],
                'senha' => $res[$i]['Senha'],
                
            );

           

        }


        $result = json_encode(array('itens'=>$dados));
        echo $result;
    } else {
        $result = json_encode(array('itens'=>'0'));
        echo $result;
    }



?>