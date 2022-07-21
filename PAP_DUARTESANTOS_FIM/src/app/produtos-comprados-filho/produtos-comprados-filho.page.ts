import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Api } from 'src/services/api';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-produtos-comprados-filho',
  templateUrl: './produtos-comprados-filho.page.html',
  styleUrls: ['./produtos-comprados-filho.page.scss'],
})
export class ProdutosCompradosFilhoPage implements OnInit {

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

        this.provider.dadosApi(dados, 'produtos-comprados-filho/listar.php').subscribe(data => {
          console.log("entrei no produtos-comprados-filho")
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
