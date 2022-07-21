import { ToastController } from '@ionic/angular';
import { Api } from './../../services/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage implements OnInit {

  nome: string = "";
  mail: string = "";
  senha: string = "";

  constructor(
    private router: Router,
    private provider:Api,
    private toastController: ToastController
    ) { }

  ngOnInit() {
  }

  async mensagem(mensagem, cor){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor,
    });
    toast.present();
  }



  registar(){

    return new Promise(resolve =>{
      let dados={
        nome: this.nome,
        mail: this.mail,
        senha: this.senha,
      }
      this.provider.dadosApi(dados, 'registar/registar.php').subscribe(
        data=>{

          if (data['ok']==true) {
            this.mensagem(data['mensagem'], 'seccess');
            //this.mensagem(data['util']['nome'], 'success');
            this.router.navigate(['login']);


          }else{
            this.mensagem(data['mensagem'], 'danger');
          }

        }
      )
    });
  }

  login(){
    this.router.navigate(['login']);

  }



}
