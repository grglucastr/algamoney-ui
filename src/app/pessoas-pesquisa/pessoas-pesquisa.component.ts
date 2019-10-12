import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas = [
    {nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true},
    {nome: 'Sebastião Silva', cidade: 'São Paulo', estado: 'SP', ativo: false},
    {nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true},
    {nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true},
    {nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false},
    {nome: 'George Bentes', cidade: 'Manaus', estado: 'AM', ativo: false},
    {nome: 'Pollyana Siqueira', cidade: 'Campina Grande', estado: 'PB', ativo: false},
    {nome: 'Gauchy Levisco', cidade: 'Natal', estado: 'RN', ativo: false},
    {nome: 'Matheus Henrique', cidade: 'Rondonópolis', estado: 'MT', ativo: false},
  ];

  constructor() { }

  ngOnInit() {
  }

}

