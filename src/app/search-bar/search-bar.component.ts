import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  query: string = '';
  results: any[] = [];

  constructor(private apiService: ApiService){ }

  onSearch():void {
    this.apiService.search(this.query).subscribe(
      (response) => {
        this.results = response.items;
      },
      (error: any) => {
        console.error('Oh dear, there was an error', error)
      }
    )
  }
}
