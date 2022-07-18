<?php
    require_once('../conexao.php');
    $postjson = json_decode(file_get_contents('php://input'), true);

    $limite = intVal($postjson['limit']);
    $start = intVal($postjson['start']);
	$idLogado = intVal($postjson['idLogado']);

    $busca = '%'.$postjson['nome'].'%';

//Pais------> select * tarefas where utilizadorFilho_idutilizadorFilho = (select * idutilizadorFilho where utilizadorPai_idutilizadorPai = $idlogado);

    //if ($tipoUtilizador == "filho") {
//Filhos----->    SELECT * from tarefas where idFilho(login) = utilizadorFilho_idutilizadorFilho

    //$query = $pdo->query("SELECT * from tarefa where NomeTarefa like '$busca' order by idTarefa desc limit $postjson[start], $postjson[limit] ");


//Pais------> select * tarefa where utilizadorFilho_idutilizadorFilho = (select * idutilizadorFilho where utilizadorPai_idutilizadorPai = idlogado);


    // $query = $pdo->query("SELECT * from tarefa where NomeTarefa like '$busca' and utilizadorFilho_idutilizadorFilho = (select idutilizadorFilho
    //  from utilizadorFilho where utilizadorPai_idutilizadorPai = $idLogado) order by idTarefa desc limit $postjson[start], $postjson[limit]");


    $query = $pdo->query("select * from tarefa, utilizadorFilho where NomeTarefa like '$busca'and tarefa.utilizadorFilho_idutilizadorFilho
    = utilizadorfilho.idutilizadorFilho and utilizadorPai_idutilizadorPai = $idLogado and TarefaRealizada = 1  order by idTarefa desc limit $postjson[start], $postjson[limit]");
 
	$res = $query->fetchAll(PDO::FETCH_ASSOC);
	$total_reg = @count($res);
	if($total_reg > 0){     

        for($i=0; $i < $total_reg; $i++){
            foreach ($res[$i] as $key => $value){	}

            $dados[] = array(
                // 'id' => $res[$i]['id'],
                // 'nome' => $res[$i]['nome'],
                // 'mail' => $res[$i]['mail'],
                // 'senha' => $res[$i]['senha'],
                'id' => $res[$i]['IdTarefa'],
                'nome' => $res[$i]['NomeTarefa'],
                'descricao' => $res[$i]['DescricaoTarefa'],
                'pontos' => $res[$i]['PontosTarefa'],
                'idFilhoTarefa' => $res[$i]['utilizadorFilho_idutilizadorFilho'],   
                'dataAtribuicao' => $res[$i]['DataAtribuicao'], 
                'dataRealizacao' => $res[$i]['DataRealizacao'], 
            );
        }

        $result = json_encode(array('itens'=>$dados));
        echo $result;
    } else {
        $result = json_encode(array('itens'=>'0'));
        echo $result;
    }
//}