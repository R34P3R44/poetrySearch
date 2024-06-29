import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  selectedValue: string = '';
  options: {value: string, display: string}[] = [
    {value: 'option1', display: 'Author'},
    {value: 'option2', display: 'Title'},
    {value: 'option3', display: 'Lines'},
    {value: 'option4', display: 'Line count'},
    {value: 'option5', display: 'Poem count'},
  ];

  onSelectionChange(event: any): void{
    this.selectedValue = event.target.value;
  }
}
