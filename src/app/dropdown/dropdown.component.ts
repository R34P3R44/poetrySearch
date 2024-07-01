import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  selectedValue: string = '';
  @Output() SearchCriteria: EventEmitter<string> = new EventEmitter<string>();
  
  
  options: {value: string, display: string}[] = [
    {value: 'author', display: 'Author'},
    {value: 'title', display: 'Title'},
    {value: 'lines', display: 'Lines'},
    {value: 'linecount', display: 'Line count'},
    {value: 'poemcount', display: 'Poem count'},
  ];

  onSelectionChange(event: any): void{
    this.selectedValue = event.target.value;
    this.SearchCriteria.emit(this.selectedValue)
  }
}
