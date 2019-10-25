import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoListagemComponent } from './lancamento-listagem.component';

describe('LancamentoListagemComponent', () => {
  let component: LancamentoListagemComponent;
  let fixture: ComponentFixture<LancamentoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
