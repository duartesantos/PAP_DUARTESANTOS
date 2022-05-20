import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Produto{
id:string;
nome: string;
pontos: string;
quantidade: string
}


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
private url = "http://localhost/api/tarefa";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<[Produto]>(this.url);
  }

  remover(id: any) {
    return this.http.delete(this.url + '/' + id);
  }

  create(produto: Produto) {
    return this.http.post(this.url, produto)
  }

  update(produto: Produto, id: string) {
    return this.http.put(this.url + '/' + id, produto);
  }


}
