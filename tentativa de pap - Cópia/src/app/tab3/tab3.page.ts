import { Produto, ProdutoService } from './../servico/produto.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ModalprodutoPage } from '../pagina/modalproduto/modalproduto.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  produtos: Produto[];
  constructor(private service: ProdutoService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController) {}



  ngOnInit() {
    this.service.getAll().subscribe(response=>{
      this.produtos = response;
    })
  }

  remover(id: any) {
    this.service.remover(id).subscribe(() => {
      // this.produtos = this.produtos.filter(idproduto => idproduto ! == id);
      this.service.getAll().subscribe(response => {
        this.produtos = response;
      })
    })
  }


  novoProduto() {
    this.modalCtrl.create({

      component: ModalprodutoPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) =>{
      this.service.getAll().subscribe(response => {
        this.produtos = response;
      })
    })
  }


  atualizar(p: Produto) {
    this.modalCtrl.create({
      component: ModalprodutoPage,
      componentProps: { p }
    }).then(modal => {
      modal.present()
      return modal.onDidDismiss();
    }).then(({ data }) => {
      this.service.getAll().subscribe(response => {
        this.produtos = response;
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



}
