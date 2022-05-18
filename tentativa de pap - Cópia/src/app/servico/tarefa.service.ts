import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Tarefa{
id: string;
nome: string;
descricao: string;
preco: string;
foto: string;
}


@Injectable({
  providedIn: 'root'
})
export class TarefaService {
private url = 'http://localhost/api/produtos';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[Tarefa]>(this.url);
  }

  remover(id: any) {
    return this.http.delete(this.url + '/' + id);
  }

  create(tarefa: Tarefa) {
    return this.http.post(this.url, tarefa);
  }

  update(tarefa: Tarefa, id: string) {
    return this.http.put(this.url + '/' + id, tarefa);
  }


}
