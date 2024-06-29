import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PoetrySearch';
  data: any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void{
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Oh dear, there was an error', error)
      }
    )
  }
}
