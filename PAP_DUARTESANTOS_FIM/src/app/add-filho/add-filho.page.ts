import { Api } from './../../services/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-add-filho',
  templateUrl: './add-filho.page.html',
  styleUrls: ['./add-filho.page.scss'],
})
export class AddFilhoPage implements OnInit {

  id: string = "";
  nome: string = "";
  mail: string = "";
  senha: string = "";

  antigo: string ="";
  antigo2: string ="";


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
        this.mail = data.mail;
        this.senha = data.senha;

        this.antigo = data.mail;
        this.antigo2 = data.nome;

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


  Filhos(){
    this.router.navigate(['filhos']);

  }

  registar(){
    return new Promise(resolve =>{
      let dados={
        nome: this.nome,
        mail: this.mail,
        senha: this.senha,
        id: this.id,
        idLogado: this.loginService.idLogado,

        antigo: this.antigo,
        antigo2: this.antigo2,

      }
      this.provider.dadosApi(dados, 'filhos/inserir.php').subscribe(
        data=>{

          if (data['ok']==true) {
            this.router.navigate(['filhos']);
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
    this.mail ="";
    this.senha ="";
  }

}
