import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  animations: [
    trigger('academicsDropdownState', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ]),
    trigger('gradeReportsDropdownState', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        overflow: 'visible'
      })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ])
  ]
})
export class ControlPanelComponent implements OnInit {
  academicsDropdownState = 'closed';
  gradeReportsDropdownState = 'closed';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAcademicsDropdown() {
    this.academicsDropdownState = this.academicsDropdownState === 'closed' ? 'open' : 'closed';
  }

  toggleGradeReportsDropdown() {
    this.gradeReportsDropdownState = this.gradeReportsDropdownState === 'closed' ? 'open' : 'closed';
  }
}
