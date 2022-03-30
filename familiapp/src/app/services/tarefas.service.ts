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

  public addTarefa(nome: string, data: string) {
    data = data.replace("-", "/");

    let tarefa: Tarefa = { nomeTarefa: nome, dataTarefa: new Date(data), realizada: false };

    this.tarefas.push(tarefa);
    console.log(this.tarefas);
  }

}

interface Tarefa {
  nomeTarefa: string;
  dataTarefa: Date;
  realizada?: boolean;
}
