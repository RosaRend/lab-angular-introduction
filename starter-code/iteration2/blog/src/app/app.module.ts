import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotMainCompComponent } from './not-main-comp/not-main-comp.component';
import { CommentscompComponent } from './not-main-comp/commentscomp/commentscomp.component';

@NgModule({
  declarations: [
    AppComponent,
    NotMainCompComponent,
    CommentscompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
