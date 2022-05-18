import { Tarefa, TarefaService } from './../servico/tarefa.service';
import { Component } from '@angular/core';
import { ModaltarefaPage } from '../pagina/modaltarefa/modaltarefa.page';
import { ModalController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
tarefas: Tarefa[];
  constructor(private service: TarefaService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController) {}


  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.tarefas = response;
    })
  }

  remover(id: any) {
    this.service.remover(id).subscribe(() => {
      // this.produtos = this.produtos.filter(idproduto => idproduto ! == id);
      this.service.getAll().subscribe(response => {
        this.tarefas = response;
      })
    })
  }

  
  novoProduto() {
    this.modalCtrl.create({
      component: ModaltarefaPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(response => {
        this.tarefas = response;
      })
    })
  }


  atualizar(p: Tarefa) {
    this.modalCtrl.create({
      component: ModaltarefaPage,
      componentProps: { p }
    }).then(modal => {
      modal.present()
      return modal.onDidDismiss();
    }).then(({ data }) => {
      this.service.getAll().subscribe(response => {
        this.tarefas = response;
      });
      this.toastCtrl.create({
        message: 'Produto Atualizado Com Sucesso!',
        duration: 2000,
        color: 'success'
      }).then(toast => {
        toast.present();
      })
    })
  }

  async like() {
    const toast = await this.toastCtrl.create({
      message: 'Você gosto deste produto!',
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }
  
}
