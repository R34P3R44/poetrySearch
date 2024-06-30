import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  searchForAuthor(author: string): Observable<any> {
    return this.http.get<any>(`https://poetrydb.org/author/${author}`);  
  }
  searchForTitle(title: string): Observable<any> {
    return this.http.get<any>(`https://poetrydb.org/title/${title}`);
  }
  searchForLines(lines: string): Observable<any> {
    return this.http.get<any>(`https://poetrydb.org/lines/${lines}`);
  }
  searchForLineCount(linecount: string): Observable<any> {
    return this.http.get<any>(`https://poetrydb.org/linecount/${linecount}`);
  }
  searchForPoemCount(poemcount: string): Observable<any> {
    return this.http.get<any>(`https://poetrydb.org/poemcount/${poemcount}`);
  }
}
