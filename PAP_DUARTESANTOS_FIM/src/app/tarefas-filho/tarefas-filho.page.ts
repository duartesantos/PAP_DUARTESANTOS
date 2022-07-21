import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Api } from 'src/services/api';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-tarefas-filho',
  templateUrl: './tarefas-filho.page.html',
  styleUrls: ['./tarefas-filho.page.scss'],
})
export class TarefasFilhoPage implements OnInit {

  itens : any = [];
  limit : number = 10;
  start : number = 0;
  nome : string = "";


  constructor(
    private router: Router,
    private provider: Api,
    private toastController: ToastController,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }


  fazerTarefa(idTarefa, pontos){
    return new Promise(resolve =>{

      let dados={

        id: this.loginService.idLogado,
        pontos: pontos,
        idTarefa: idTarefa,
      }
      this.provider.dadosApi(dados, 'tarefas-filho/fazerTarefa.php').subscribe(
        data=>{

          if (data['ok']==true) {
            this.router.navigate(['tarefas-filho']);
            this.carregar();
            this.mensagem(data['mensagem'], 'success');

          }else{
            this.mensagem(data['mensagem'], 'danger');
          }

        }
      )
    });

  }

  ionViewWillEnter(){
    this.itens = [];
    this.start = 0;
    this.carregar()
  }


  carregar(){
    return new Promise(resolve => {
      this.itens = [];
      let dados = {

        nome : this.nome,
        limit : this.limit,
        start : this.start,
        idLogado: this.loginService.idLogado


        }

        this.provider.dadosApi(dados, 'tarefas-filho/listar.php').subscribe(data => {

        if(data['itens'] == '0') {
          this.ionViewWillEnter();
        }else{
          this.itens = [];
          for(let item of data['itens']){
            this.itens.push(item);
          }
        }
         resolve(true);
        });
    });
  }



  eliminar(id){
    return new Promise(resolve =>{
      let dados={
        id: id,

      }
      this.provider.dadosApi(dados, 'tarefas/eliminar.php').subscribe(
        data=>{

          if (data['ok']==true) {
            this.carregar();
            this.mensagem(data['mensagem'], 'success');
          }else{
            this.mensagem(data['mensagem'], 'danger');
          }

        }
      )
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

  //atualizar o list view

  doRefresh(event) {

    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

//barra de rolagem
loadData(event) {

    this.start += this.limit;

    setTimeout(() => {
      this.carregar().then(()=>{
        event.target.complete();
      });

    }, 500);
}

mostrar(id, nome, descricao, pontos){

  let link="mostrar-tarefa/" + id + "/" + nome + "/" + descricao + "/" + pontos + "/";
  // console.log(link+" :link");
  link = link.replace("/\s+/g", '');
  // console.log(link+" :link depois do replace");
  // id = id.replace(/\s+/g, '');
  // nome = nome.replace(/\s+/g, '');
  // descricao = descricao.replace(/\s+/g, '');
  // pontos = pontos.replace(/\s+/g, '');

  //this.router.navigate(['mostrar-tarefa/' + id + '/' + nome + '/' + descricao + '/' + pontos + '/']);
  this.router.navigate([link]);

}


}
