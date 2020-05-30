import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
})
export class InlineEditComponent implements OnInit {
  @Input() value: string;
  @Output() focusOut: EventEmitter<string> = new EventEmitter<string>();

  editMode = false;
  constructor() {}

  ngOnInit() {
  }

  onFocusOut() {
    this.focusOut.emit(this.value);
  }
}
