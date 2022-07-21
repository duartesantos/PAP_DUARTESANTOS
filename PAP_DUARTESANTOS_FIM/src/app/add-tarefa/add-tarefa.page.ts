import { Api } from './../../services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-add-tarefa',
  templateUrl: './add-tarefa.page.html',
  styleUrls: ['./add-tarefa.page.scss'],
})
export class AddTarefaPage implements OnInit {

  id: string = "";
  nome: string = "";
  descricao: string = "";
  pontos: string = "";
  idfilho: string = "";
  // filhos : any = [{
  //  "id":'1', 
  //  "nome":'Carla'},
  // {
  //     "id":'2', 
  //    "nome":'Joao'}];

  filhos : any = [];


  constructor(
    private router: Router,
    private provider:Api,
    private actRouter:ActivatedRoute,
    private toastController: ToastController,
    private loginService: LoginService

  ) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{

      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.pontos = data.pontos;
      this.idfilho = data.filho;
    });

    return new Promise(resolve => {
      this.filhos = [];
      let dados = {

        idLogado: this.loginService.idLogado


        }

        this.provider.dadosApi(dados, 'tarefas/buscarFilhos.php').subscribe(data => {

        if(data['filhos'] == '0') {
          console.log("Não há filhos!")
        }else{
          this.filhos = [];
          for(let filho of data['filhos']){
            this.filhos.push(filho);
          }
        }
         resolve(true);
        });
    });
    
  }

  async mensagem(mensagem, cor){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor,
    });
    toast.present();
  }

  Tarefa(){
    this.router.navigate(['tarefas']);

  }

  registar(){
    return new Promise(resolve =>{
      
      let dados={
        nome: this.nome,
        descricao: this.descricao,
        pontos: this.pontos,
        id: this.id,
        idFilho: this.idfilho,
        

      }
      this.provider.dadosApi(dados, 'tarefas/inserir.php').subscribe(
        data=>{

          if (data['ok']==true) {
            this.router.navigate(['tarefas']);
            this.mensagem(data['mensagem'], 'success');
            this.limparCampos();

          }else{
            this.mensagem(data['mensagem'], 'danger');
          }

        }
      )
    });
    

  }



  limparCampos(){
    this.nome ="";
    this.descricao ="";
    this.pontos ="";
  }




    
}
