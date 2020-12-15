import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCervejaPage } from './lista-cerveja.page';

describe('ListaCervejaPage', () => {
  let component: ListaCervejaPage;
  let fixture: ComponentFixture<ListaCervejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCervejaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCervejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
