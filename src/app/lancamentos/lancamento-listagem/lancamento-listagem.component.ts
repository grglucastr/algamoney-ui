import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lancamento-listagem',
  templateUrl: './lancamento-listagem.component.html',
  styleUrls: ['./lancamento-listagem.component.css']
})
export class LancamentoListagemComponent implements OnInit {

  @Input() lancamentos: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
