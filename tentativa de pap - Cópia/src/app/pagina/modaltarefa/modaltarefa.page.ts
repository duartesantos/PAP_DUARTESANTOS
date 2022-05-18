import { Tarefa, TarefaService } from '../../servico/tarefa.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaltarefa',
  templateUrl: './modaltarefa.page.html',
  styleUrls: ['./modaltarefa.page.scss'],
})
export class ModaltarefaPage implements OnInit {
@Input() p: Tarefa;
atualizar = false;
dados = {
  nome: '',
  descricao: '',
  preco: '',
  foto: ''
}

  constructor(private modalCtrl:ModalController,private service: TarefaService) { }

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
