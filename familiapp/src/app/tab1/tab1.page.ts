import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController,
    public tarefasService: TarefasService,
    public toastController: ToastController) { }


  async presentAlertPromptAdd() {
    const alert = await this.alertController.create({
      header: 'Adicionar Tarefa',
      inputs: [
        {
          name: 'nomeTarefa',
          type: 'text',
          placeholder: 'Nome da Tarefa'
        },

        // input date with min & max
        {
          name: 'dataTarefa',
          type: 'date',
          min: '2022-03-01',
          max: '2025-12-12'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

        }, {
          text: 'Ok',
          handler: (alert) => {
            if (alert.nomeTarefa != "")
              this.tarefasService.addTarefa(alert.nomeTarefa, alert.dataTarefa)
            else {
              this.presentToast();
              this.presentAlertPromptAdd();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Preencha os campos!",
      duration: 2000
    });
    toast.present();
  }
}
