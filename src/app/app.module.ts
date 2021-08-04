import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolishComponent } from './components/polish/polish.component';
import { EnglishComponent } from './components/english/english.component';

@NgModule({
  declarations: [
    AppComponent,
    PolishComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
