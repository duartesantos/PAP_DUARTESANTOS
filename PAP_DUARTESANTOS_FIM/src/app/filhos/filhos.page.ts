import { LoginService } from './../../services/login.service';
import { ToastController } from '@ionic/angular';
import { Api } from './../../services/api';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filhos',
  templateUrl: './filhos.page.html',
  styleUrls: ['./filhos.page.scss'],
})
export class FilhosPage implements OnInit {
  public filhos: string;

  itens : any = [];
  limit : number = 10;
  start : number = 0;
  nome : string = "";

  constructor(
    private router: Router,
    private provider: Api,
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.filhos = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.filhos+" id filho")
  }


  addFilhos(){
    this.router.navigate(['add-filho']);

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

        this.provider.dadosApi(dados, 'filhos/listar.php').subscribe(data => {

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

  editar(id, nome, mail, senha ){

    this.router.navigate(['add-filho/' + id + '/' + nome + '/' + mail + '/' + senha + '/'])

  }


  eliminar(id){
    return new Promise(resolve =>{
      let dados={
        id: id,

      }
      this.provider.dadosApi(dados, 'filhos/eliminar.php').subscribe(
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


}
