import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',//tela default
    pathMatch: 'full'
  },
  {
    path: 'folder/:idPai',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'filhos',
    loadChildren: () => import('./filhos/filhos.module').then( m => m.FilhosPageModule)
  },
  {
    path: 'filhos/:idPai',
    loadChildren: () => import('./filhos/filhos.module').then( m => m.FilhosPageModule)
  },
  {
    path: 'add-filho',
    loadChildren: () => import('./add-filho/add-filho.module').then( m => m.AddFilhoPageModule)
  },
  {
    path: 'add-filho/:id/:nome/:mail/:senha',
    loadChildren: () => import('./add-filho/add-filho.module').then( m => m.AddFilhoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registar',
    loadChildren: () => import('./registar/registar.module').then( m => m.RegistarPageModule)
  },
  {
    path: 'filhos-home',
    loadChildren: () => import('./filhos-home/filhos-home.module').then( m => m.FilhosHomePageModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'mostrar-tarefa',
    loadChildren: () => import('./mostrar-tarefa/mostrar-tarefa.module').then( m => m.MostrarTarefaPageModule)
  },
  {
    path: 'mostrar-tarefa/:id/:nome/:descricao/:pontos/:dataAtribuicao',
    loadChildren: () => import('./mostrar-tarefa/mostrar-tarefa.module').then( m => m.MostrarTarefaPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'add-tarefa',
    loadChildren: () => import('./add-tarefa/add-tarefa.module').then( m => m.AddTarefaPageModule)
  },
  {
    path: 'add-tarefa/:id/:nome/:descricao/:pontos',
    loadChildren: () => import('./add-tarefa/add-tarefa.module').then( m => m.AddTarefaPageModule)
  },
  {
    path: 'add-produto',
    loadChildren: () => import('./add-produto/add-produto.module').then( m => m.AddProdutoPageModule)
  },
  {
    path: 'add-produto/:id/:nome/:pontos/:quantidade',
    loadChildren: () => import('./add-produto/add-produto.module').then( m => m.AddProdutoPageModule)
  },
  {
    path: 'tarefas-filho',
    loadChildren: () => import('./tarefas-filho/tarefas-filho.module').then( m => m.TarefasFilhoPageModule)
  },
  {
    path: 'produtos-filho',
    loadChildren: () => import('./produtos-filho/produtos-filho.module').then( m => m.ProdutosFilhoPageModule)
  },
  {
    path: 'tarefas-feitas',
    loadChildren: () => import('./tarefas-feitas/tarefas-feitas.module').then( m => m.TarefasFeitasPageModule)
  },
  {
    path: 'mostrar-tarefa-feita',
    loadChildren: () => import('./mostrar-tarefa-feita/mostrar-tarefa-feita.module').then( m => m.MostrarTarefaFeitaPageModule)
  },
  {
    path: 'mostrar-tarefa-feita/:id/:nome/:descricao/:pontos/:dataAtribuicao/:dataRealizacao',
    loadChildren: () => import('./mostrar-tarefa-feita/mostrar-tarefa-feita.module').then( m => m.MostrarTarefaFeitaPageModule)
  },
  {
    path: 'tarefas-feitas-filho',
    loadChildren: () => import('./tarefas-feitas-filho/tarefas-feitas-filho.module').then( m => m.TarefasFeitasFilhoPageModule)
  },
  {
    path: 'produtos-comprados-filho',
    loadChildren: () => import('./produtos-comprados-filho/produtos-comprados-filho.module').then( m => m.ProdutosCompradosFilhoPageModule)
  },
  {
    path: 'produtos-comprados',
    loadChildren: () => import('./produtos-comprados/produtos-comprados.module').then( m => m.ProdutosCompradosPageModule)
  }

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
