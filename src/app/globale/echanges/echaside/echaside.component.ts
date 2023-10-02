import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-echaside',
  templateUrl: './echaside.component.html',
  styleUrls: ['./echaside.component.scss']
})
export class EchasideComponent implements OnInit {


  @Input() items: any;
  @Output() newItemEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }

  sendValues(data){  
    this.newItemEvent.emit(data);  
  }

}
