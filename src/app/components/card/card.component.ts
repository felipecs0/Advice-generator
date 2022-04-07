import {Component, OnInit, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() idMensage: number | undefined;
  @Input() mensage: string | undefined;
  @Output() clickButtom = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  newAdvice(){
    this.clickButtom.emit()
  }

}
