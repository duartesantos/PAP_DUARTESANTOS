import { Tarefa, TarefaService } from '../servico/tarefa.service';
import { Component } from '@angular/core';
import { ModaltarefaPage } from '../pagina/modaltarefa/modaltarefa.page';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tarefa: Tarefa[];
  constructor(private service: TarefaService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController) {}


  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.tarefa = response;
    });
  }

  remover(id: any) {
    this.service.remover(id).subscribe(() => {
      // this.produtos = this.produtos.filter(idproduto => idproduto ! == id);
      this.service.getAll().subscribe(response => {
        this.tarefa = response;
      });
    });
  }


  novaTarefa() {
    this.modalCtrl.create({
      component: ModaltarefaPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(response => {
        this.tarefa = response;
      });
    });
  }


  atualizar(p: Tarefa) {
    this.modalCtrl.create({
      component: ModaltarefaPage,
      componentProps: { p }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({ data }) => {
      this.service.getAll().subscribe(response => {
        this.tarefa = response;
      });
      this.toastCtrl.create({
        message: 'Produto Atualizado Com Sucesso!',
        duration: 2000,
        color: 'success'
      }).then(toast => {
        toast.present();
      });
    });
  }


}
