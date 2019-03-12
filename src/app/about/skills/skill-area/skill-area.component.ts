import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'skill-area',
  templateUrl: './skill-area.component.html',
  styleUrls: ['./skill-area.component.scss']
})
export class SkillAreaComponent implements OnInit {
  @Input() visible: false;
  @Input() name;
  @Input() skills;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleClick(event) {
    event.preventDefault();
    this.clicked.emit(event);
  }
}
