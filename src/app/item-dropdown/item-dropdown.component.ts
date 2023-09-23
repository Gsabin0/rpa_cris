import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-dropdown',
  templateUrl: './item-dropdown.component.html',
  styleUrls: ['./item-dropdown.component.css']
})
export class ItemDropdownComponent implements OnInit {  
  select1: any ={};
  select2 ="Selecione";
  condicao: string = "";
  condicoes: any =[]; 
  produto: any=[]; 
  valorFormatado: string = "";
  prazoEntrega: string = "";
  produtos = [
    {
      id:0,
      nome:"Selecione",
      condicoes:["Selecione"],
    },
    {
      id:1,
      nome:"Extrator Documentos",
      condicoes:["Um unico documento", "De dois a cinco documentos", "Maior que cinco"],
    },
    {
      id:2,
      nome:"Sites Fornecedores",
      condicoes:["Uma execução diaria um site", "Uma execução diaria de dois a cinco sites", "Uma execução diaria mais de cinco sites"],
    },
    {
      id:3,
      nome:"Formularios site",
      condicoes:["Um site uma execução", "De duas a cincos execuçoes diarias um site", "Mais de cinco execuçoes diarias um site"],
    },

  ];
  constructor(){}

  ngOnInit() {
    this.select1 = 0;
    this.condicoes = this.produtos.filter((x)=> x.id == this.select1)[0].condicoes;
  }

  onChange(){
    this.select2 = "";
    this.condicoes = this.produtos.filter((x)=> x.id == this.select1)[0].condicoes;
  }

  clickButton(){
    this.produto = this.produtos.find((x)=> x.id == this.select1)?.nome;
    this.condicao = this.select2;
    const numeroAleatorio = Math.random() * 99 + 99;
    this.valorFormatado = `RS:${numeroAleatorio.toFixed(2)}`;
    const prazoEntrega = Math.random() * 99 + 1;
    this.prazoEntrega = `Estimasse ${prazoEntrega.toFixed()} dias pra desenvolver esse projeto`;
  }


}
