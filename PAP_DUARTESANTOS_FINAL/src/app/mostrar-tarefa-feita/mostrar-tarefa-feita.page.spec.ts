import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarTarefaFeitaPage } from './mostrar-tarefa-feita.page';

describe('MostrarTarefaFeitaPage', () => {
  let component: MostrarTarefaFeitaPage;
  let fixture: ComponentFixture<MostrarTarefaFeitaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarTarefaFeitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarTarefaFeitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
