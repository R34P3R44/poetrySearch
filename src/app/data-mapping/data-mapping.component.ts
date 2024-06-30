import { Component } from '@angular/core';

interface Data {
  id: number,
  title: string,
  author: string,
  lines: [],
  linecount: string
}

interface DataViewModel {
  dataId: number,
  dataTitle: string,
  dataAuthor: string,
  dataLines: [],
  dataLinecount: string
}

@Component({
  selector: 'app-data-mapping',
  templateUrl: './data-mapping.component.html',
  styleUrl: './data-mapping.component.css'
})
export class DataMappingComponent {

  

}
