import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  [x: string]: any;
  title = 'PoetrySearch'
  receivedDDLselection: string = '';
  receivedSearchTerm: string = '';
  results: any[] = [];

  handleDDLSelection(ddlSelectedData: string ): void {
    this.receivedDDLselection = ddlSelectedData;
    console.log(ddlSelectedData)
  }

  handleSearchTerm(textData: string ): void {
    this.receivedSearchTerm = textData;
  }

  constructor(private apiService: ApiService){ }

  async onSearch():Promise<void> {

    if(this.receivedDDLselection === 'author'){
      this.apiService.searchForAuthor(this.receivedSearchTerm).subscribe(data => this.results = data);
    }
    else if(this.receivedDDLselection === 'title'){
      this.apiService.searchForTitle(this.receivedSearchTerm).subscribe(data => this.results = data);

    }
    else if(this.receivedDDLselection === 'lines'){
      this.apiService.searchForLines(this.receivedSearchTerm).subscribe(data => this.results = data);

    }
    else if(this.receivedDDLselection === 'linecount'){
      let linecountInt: any
      linecountInt = parseInt(this.receivedSearchTerm, 10)
      if(linecountInt){
        this.apiService.searchForLineCount(linecountInt).subscribe(data => this.results = data);
      }
    }
    else if(this.receivedDDLselection === 'poemcount'){
      let poemcountInt: any
      poemcountInt = parseInt(this.receivedSearchTerm, 10)
      if(poemcountInt){
        this.apiService.searchForPoemCount(poemcountInt).subscribe(data => this.results = data);
      }
    }
  }

}

