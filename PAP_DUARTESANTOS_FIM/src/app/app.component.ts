import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

//pai
  public appPages = [
    { title: 'Filhos', url: '/filhos/:id', icon: 'people' },
    { title: 'Tarefas', url: '/tarefas', icon: 'clipboard' },
    { title: 'Tarefas Feitas', url: '/tarefas-feitas', icon: 'clipboard' },
    { title: 'Produtos', url: '/produtos', icon: 'cart' },
    { title: 'Produtos Comprados', url: '/produtos-comprados', icon: 'cart' },

    { title: 'Sair', url: '/login', icon: 'exit' },


  ];



//filho
  public appPages2 = [
    { title: 'Tarefas', url: '/tarefas-filho', icon: 'clipboard' },
    { title: 'Tarefas Feitas', url: '/tarefas-feitas-filho', icon: 'clipboard' },
    { title: 'Produtos', url: '/produtos-filho', icon: 'cart' },
    { title: 'Produtos Comprados', url: '/produtos-comprados-filho', icon: 'cart' },

    { title: 'Sair', url: '/login', icon: 'exit' },

  ];

  url : string;
  tipoLogado : string;
  nomeLogado : string;
  pontosLogado : string;

  constructor(
    private router: Router,
    private loginService: LoginService

    ) {
    router.events.subscribe(event => {

      if (event instanceof NavigationEnd ) {
        this.url = event.url;
        console.log("url: "+this.url);

        this.tipoLogado = loginService.tipoLogado;
        console.log("pai ou filho: "+this.tipoLogado);

        this.nomeLogado = loginService.nomeLogado;
        console.log("nomeLogado: "+this.nomeLogado);

        this.pontosLogado = loginService.pontosLogado;
        console.log("pontosLogado: " + this.loginService.pontosLogado);

      }
    });
  }
}
