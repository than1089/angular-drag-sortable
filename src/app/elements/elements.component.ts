import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
})
export class ElementsComponent {
  elements = [
    'Element 1',
    'Element 2',
  ];

  json = '';

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  addElement() {
    this.elements.push('Element ' + (this.elements.length + 1));
  }

  generateJSON() {
    this.json = JSON.stringify(this.elements, null, " ");
  }
}
