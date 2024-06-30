import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  text: string = '';

  @Output() SearchTerm: EventEmitter<string> = new EventEmitter<string>();

  sendTheNewValue(event: any): void {
    this.text = event.target.value;
    this.SearchTerm.emit(this.text)
  }

}
