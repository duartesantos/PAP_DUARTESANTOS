import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/services/api';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-mostrar-tarefa-feita',
  templateUrl: './mostrar-tarefa-feita.page.html',
  styleUrls: ['./mostrar-tarefa-feita.page.scss'],
})
export class MostrarTarefaFeitaPage implements OnInit {
  
  nome: string = "";
  descricao: string = "";
  pontos: string = "";
  id: string = "";
  dataAtribuicao: string = "";
  dataRealizacao: string = "";


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
      this.dataRealizacao = data.dataRealizacao;

    });
  }

  filhos(){
    if(this.loginService.tipoLogado == 'pai'){
      this.router.navigate(['tarefas-feitas']);
    }
    else{
      this.router.navigate(['tarefas-feitas-filho']);
    }
  }

}
