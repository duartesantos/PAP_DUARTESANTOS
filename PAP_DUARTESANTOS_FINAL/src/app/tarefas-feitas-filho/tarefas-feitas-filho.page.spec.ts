import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarefasFeitasFilhoPage } from './tarefas-feitas-filho.page';

describe('TarefasFeitasFilhoPage', () => {
  let component: TarefasFeitasFilhoPage;
  let fixture: ComponentFixture<TarefasFeitasFilhoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasFeitasFilhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarefasFeitasFilhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
