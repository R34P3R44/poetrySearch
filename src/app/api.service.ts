import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Result {
  id: number;
  author: string;
  title: string;
  lines: string;
  linecount: string
}
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  searchForAuthor(author: string): Observable<Result[]> {
    return this.http.get<Result[]>(`https://poetrydb.org/author/${author}`);  
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
