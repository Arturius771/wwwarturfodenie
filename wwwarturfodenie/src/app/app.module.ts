import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfHeaderComponent } from './af-header/af-header.component';
import { AfFooterComponent } from './af-footer/af-footer.component';
import { AfMainContentComponent } from './af-main-content/af-main-content.component';
import { AfStudyRecordComponent } from './af-study-record/af-study-record.component';
import { RouterModule } from '@angular/router';
import { AfProjectsComponent } from './af-projects/af-projects.component';
import { AfNavbarComponent } from './af-navbar/af-navbar.component';
import { AfProjectCapsuleComponent } from './af-project-capsule/af-project-capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    AfHeaderComponent,
    AfFooterComponent,
    AfMainContentComponent,
    AfStudyRecordComponent,
    AfProjectsComponent,
    AfNavbarComponent,
    AfProjectCapsuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: AfMainContentComponent },
      { path: 'study-record', component: AfStudyRecordComponent },
      { path: 'projects', component: AfProjectsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: AfMainContentComponent },
      // { enableTracing: true } // <-- debugging purposes only
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
