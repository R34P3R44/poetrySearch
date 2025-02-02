import { Component, OnInit } from '@angular/core';
import { ApiService, Result } from './api.service';
import { Observable, of } from 'rxjs';
import { groupBy, map, mergeMap, reduce, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'PoetrySearch'
  receivedDDLselection: string = '';
  receivedSearchTerm: string = '';
  results$: Observable<any>;

  constructor(private apiService: ApiService){ }

  handleDDLSelection(ddlSelectedData: string ): void {
    this.receivedDDLselection = ddlSelectedData;
    console.log(ddlSelectedData)
  }

  handleSearchTerm(textData: string ): void {
    this.receivedSearchTerm = textData;
  }

  async onSearch():Promise<void> {

    if(this.receivedDDLselection === 'author'){
      this.results$ = this.apiService.searchForAuthor(this.receivedSearchTerm).pipe(
        mergeMap(titles => of(...titles)),
        groupBy(title => title.author),
        mergeMap(group$ =>
          group$.pipe(
            toArray(),
            map(titles => ({author: group$.key, titles}))
          )
        ),
        toArray()
      );
    }
    else if(this.receivedDDLselection === 'title'){
      this.results$ = this.apiService.searchForTitle(this.receivedSearchTerm).pipe(
        mergeMap(titles => of(...titles)),
        groupBy(title => title),
        mergeMap(group$ =>
          group$.pipe(
            toArray(),
            map(titles => ({title: group$.key, titles}))
          )
        ),
        toArray()
      );
    }
    else if(this.receivedDDLselection === 'lines'){
      this.results$ = this.apiService.searchForLines(this.receivedSearchTerm).pipe(
        mergeMap(titles => of(...titles)),
        groupBy(lines => lines),
        mergeMap(group$ =>
          group$.pipe(
            toArray(),
            map(titles => ({title: group$.key, titles}))
          )
        ),
        toArray()
      );
    }

    else if(this.receivedDDLselection === 'linecount'){
      let linecountInt: any
      linecountInt = parseInt(this.receivedSearchTerm, 10)
      if(linecountInt){
        this.results$ = this.apiService.searchForLineCount(this.receivedSearchTerm).pipe(
          mergeMap(titles => of(...titles)),
          groupBy(linecount => linecount),
          mergeMap(group$ =>
            group$.pipe(
              toArray(),
              map(titles => ({title: group$.key, titles}))
            )
          ),
          toArray()
        );
  
      }
    }
    
    else if(this.receivedDDLselection === 'poemcount'){
      let poemcountInt: any
      poemcountInt = parseInt(this.receivedSearchTerm, 10)
      if(poemcountInt){
        this.results$ = this.apiService.searchForPoemCount(this.receivedSearchTerm).pipe(
          mergeMap(titles => of(...titles)),
          groupBy(poemcount => poemcount),
          mergeMap(group$ =>
            group$.pipe(
              toArray(),
              map(titles => ({title: group$.key, titles}))
            )
          ),
          toArray()
        );
  
      }
    }

  }

}

