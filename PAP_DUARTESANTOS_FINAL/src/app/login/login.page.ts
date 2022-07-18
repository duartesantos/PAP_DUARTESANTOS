import { LoginService } from './../../services/login.service';
import { ToastController } from '@ionic/angular';
import { Api } from './../../services/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  utilizador: string = "";
  senha: string = "";
  tipoUtilizador: string ="";
  idPai: string ="";

  constructor(
    private router: Router,
    private provider:Api,
    private toastController: ToastController,
    public loginService: LoginService

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


  login(){
    return new Promise(resolve =>{
      let dados={
        utilizador: this.utilizador,
        senha: this.senha,
        tipoUtilizador :this.tipoUtilizador,

      }
      console.log(this.tipoUtilizador+"ola");

      this.provider.dadosApi(dados, 'login/login.php').subscribe(
        data=>{

          if (data['ok']==true) {
            this.mensagem(data['mensagem'], 'success');

            this.loginService.idLogado = data['util']['id'];
            console.log("idLogado: " + this.loginService.idLogado);

            this.loginService.tipoLogado = data['util']['tipoUtilizador'];
            console.log("tipoLogado: " + this.loginService.tipoLogado);
            if(this.loginService.tipoLogado == 'filho'){

              this.loginService.pontosLogado = data['util']['pontos'];
              console.log("pontosLogado: " + this.loginService.pontosLogado);
            }
            this.loginService.nomeLogado = data['util']['nome'];
            console.log("nomeLogado: " + this.loginService.nomeLogado);



            if(data['util']['tipoUtilizador'] == 'pai'){

              this.router.navigate(['tarefas']);//em vez de folder -> interfacePai
            }

            if(data['util']['tipoUtilizador'] == 'filho'){

              this.router.navigate(['tarefas-filho']);//em vez de folder -> interfaceFilho

            }
          }else{
            this.mensagem(data['mensagem'], 'danger');
          }

        }
      )
    });
  }



  registar(){

    this.router.navigate(['registar']);
  }


}
