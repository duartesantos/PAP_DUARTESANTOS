import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public idLogado:string;
  public tipoLogado:string;
  public nomeLogado:string;
  public pontosLogado:string;



  
  // if (tipoUtilizador == "pai") {
  //   public filhos : any = [];

  // }

  constructor() { }
}
