<?php
    require_once('../conexao.php');
    $postjson = json_decode(file_get_contents('php://input'), true);


	$idLogado = intVal($postjson['idLogado']);


    $query = $pdo->query("SELECT idutilizadorFilho, NomeFilho from utilizadorfilho where 
    utilizadorPai_idutilizadorPai = $idLogado");


    $res = $query->fetchAll(PDO::FETCH_ASSOC);
	$total_reg = @count($res);
	if($total_reg > 0){     

        for($i=0; $i < $total_reg; $i++){
            foreach ($res[$i] as $key => $value){	}

            $dados[] = array(
                'id' => $res[$i]['idutilizadorFilho'],
                'nome' => $res[$i]['NomeFilho'],
                
            );  
        }


        $result = json_encode(array('filhos'=>$dados));
        echo $result;
    } else {
        $result = json_encode(array('filhos'=>'0'));
        echo $result;
    }

?>



