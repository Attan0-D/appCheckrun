import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowListPage } from './show-list.page';

describe('ShowListPage', () => {
  let component: ShowListPage;
  let fixture: ComponentFixture<ShowListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
