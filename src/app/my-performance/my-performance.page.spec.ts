import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPerformancePage } from './my-performance.page';

describe('MyPerformancePage', () => {
  let component: MyPerformancePage;
  let fixture: ComponentFixture<MyPerformancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPerformancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPerformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
