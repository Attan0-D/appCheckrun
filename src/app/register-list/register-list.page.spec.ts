import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterListPage } from './register-list.page';

describe('RegisterListPage', () => {
  let component: RegisterListPage;
  let fixture: ComponentFixture<RegisterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
