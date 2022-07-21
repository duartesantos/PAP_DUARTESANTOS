import { Api } from './../../services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-mostrar-tarefa',
  templateUrl: './mostrar-tarefa.page.html',
  styleUrls: ['./mostrar-tarefa.page.scss'],
})
export class MostrarTarefaPage implements OnInit {

  nome: string = "";
  descricao: string = "";
  pontos: string = "";
  id: string = "";
  dataAtribuicao: string = "";


  constructor(
    private router:Router,
    private provider:Api,
    private actRouter:ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.pontos = data.pontos;
      this.dataAtribuicao = data.dataAtribuicao;

    });
  }

  filhos(){
    if(this.loginService.tipoLogado == 'pai'){
      this.router.navigate(['tarefas']);
    }
    else{
      this.router.navigate(['tarefas-filho']);
    }
  }
  

}
