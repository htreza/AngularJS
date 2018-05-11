import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaRodadaComponent } from './proxima-rodada.component';

describe('ProximaRodadaComponent', () => {
  let component: ProximaRodadaComponent;
  let fixture: ComponentFixture<ProximaRodadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximaRodadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaRodadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
