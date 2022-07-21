import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Api } from 'src/services/api';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
})
export class AddProdutoPage implements OnInit {

  id: string = "";
  nome: string = "";
  pontos: string = "";
  quantidade: string = "";


  constructor(
    private router: Router,
    private provider:Api,
    private actRouter:ActivatedRoute,
    private toastController: ToastController,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.quantidade = data.quantidade;
      this.id = data.id;
      this.nome = data.nome;
      this.pontos = data.pontos;
      
      console.log(this.quantidade);

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

  Produto(){
    this.router.navigate(['produtos']);

  }

  registar(){
    return new Promise(resolve =>{
      let dados={
        nome: this.nome,
        pontos: this.pontos,
        quantidade: this.quantidade,
        id: this.id,
        idLogado: this.loginService.idLogado,
        // idfilho: this.idfilho,
          

      }
      this.provider.dadosApi(dados, 'produtos/inserir.php').subscribe(
        data=>{

          if (data['ok']==true) {
            this.router.navigate(['produtos']);
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
    this.pontos ="";
    this.quantidade ="";
  }


}
