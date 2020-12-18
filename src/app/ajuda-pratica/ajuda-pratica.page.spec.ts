import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjudaPraticaPage } from './ajuda-pratica.page';

describe('AjudaPraticaPage', () => {
  let component: AjudaPraticaPage;
  let fixture: ComponentFixture<AjudaPraticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudaPraticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjudaPraticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
