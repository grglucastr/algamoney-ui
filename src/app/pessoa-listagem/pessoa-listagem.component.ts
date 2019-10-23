import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.css']
})
export class PessoaListagemComponent implements OnInit {

  @Input() pessoas: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
