import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
