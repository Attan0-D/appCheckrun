import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatedUserPage } from './created-user.page';

describe('CreatedUserPage', () => {
  let component: CreatedUserPage;
  let fixture: ComponentFixture<CreatedUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatedUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
