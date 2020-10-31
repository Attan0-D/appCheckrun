import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeginningPage } from './beginning.page';

describe('BeginningPage', () => {
  let component: BeginningPage;
  let fixture: ComponentFixture<BeginningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeginningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
