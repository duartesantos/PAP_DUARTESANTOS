import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private tarefas: any[] = [];

  constructor() { }


  public getTarefa(): Tarefa[] {
    return this.tarefas;

  }

  public addTarefa(nomeTarefa: string, dataTarefa: string) {
    dataTarefa = dataTarefa.replace("-", "/");

    let tarefa: Tarefa = { nomeTarefa: nomeTarefa, dataTarefa: new Date(dataTarefa), realizada: false };

    this.tarefas.push(tarefa);
    console.log(this.tarefas);
  }

  public delTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }

  public updateTarefa(index: number, nomeTarefa: string, dataTarefa: string) {
    let tarefa: Tarefa = this.tarefas[index];
    tarefa.nomeTarefa = nomeTarefa;
    dataTarefa = dataTarefa.replace("-", "/");
    tarefa.dataTarefa = new Date(dataTarefa);
    this.tarefas.splice(index, 1, tarefa);
  }



}

interface Tarefa {
  nomeTarefa: string;
  dataTarefa: Date;
  realizada?: boolean;
}
