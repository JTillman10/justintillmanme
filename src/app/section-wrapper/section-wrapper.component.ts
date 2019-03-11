import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'section-wrapper',
  templateUrl: './section-wrapper.component.html',
  styleUrls: ['./section-wrapper.component.scss']
})
export class SectionWrapperComponent implements OnInit {
  @Input() color: string;
  @Input() showNav: boolean;
  // @Input() sectionId: string;

  constructor() {}

  ngOnInit() {}
}
