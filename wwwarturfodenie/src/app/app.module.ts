import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfHeaderComponent } from './af-header/af-header.component';
import { AfFooterComponent } from './af-footer/af-footer.component';
import { AfMainContentComponent } from './af-main-content/af-main-content.component';
import { AfStudyRecordComponent } from './af-study-record/af-study-record.component';

@NgModule({
  declarations: [
    AppComponent,
    AfHeaderComponent,
    AfFooterComponent,
    AfMainContentComponent,
    AfStudyRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
