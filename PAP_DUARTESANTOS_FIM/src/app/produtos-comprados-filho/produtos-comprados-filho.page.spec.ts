import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutosCompradosFilhoPage } from './produtos-comprados-filho.page';

describe('ProdutosCompradosFilhoPage', () => {
  let component: ProdutosCompradosFilhoPage;
  let fixture: ComponentFixture<ProdutosCompradosFilhoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosCompradosFilhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosCompradosFilhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
