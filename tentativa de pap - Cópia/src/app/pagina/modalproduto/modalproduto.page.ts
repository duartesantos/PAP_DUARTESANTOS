import { Produto, ProdutoService } from './../../servico/produto.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalproduto',
  templateUrl: './modalproduto.page.html',
  styleUrls: ['./modalproduto.page.scss'],
})
export class ModalprodutoPage implements OnInit {
@Input() p: Produto;
atualizar = false;
dados = {
  nome: '',
  pontos: '',
  quantidade: ''
}

  constructor(private modalCtrl:ModalController,private service: ProdutoService) { }

  ngOnInit() {
    if (this.p) {
      this.atualizar = true;
      this.dados = this.p;
    }
  }

  fecharModal() {
    this.modalCtrl.dismiss();
  }

  Adicionar(form: NgForm) {
    console.log(form.value);
    const produto = form.value;
    if (this.atualizar) {
    this.service.update(produto, this.p.id).subscribe(response => {
    this.modalCtrl.dismiss(response);
     })
    } else {
      this.service.create(produto).subscribe(response => {
        this.modalCtrl.dismiss(response);
      })
    }
  }
}
