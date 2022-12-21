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
import { AfProjectCapsuleComponent } from './lib/components/af-project-capsule/af-project-capsule.component';
import { AfUniversityProjectCapsuleComponent } from './lib/components/af-university-project-capsule/af-university-project-capsule.component';
import { AfToggleButtonComponent } from './lib/components/af-toggle-button/af-toggle-button.component';
import { AfLandingPageComponent } from './af-landing-page/af-landing-page.component';
import { AfResourceComponent } from './lib/components/af-resource/af-resource.component';

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
    AfUniversityProjectCapsuleComponent,
    AfToggleButtonComponent,
    AfLandingPageComponent,
    AfResourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: AfLandingPageComponent },
      { path: 'study-record', component: AfStudyRecordComponent },
      { path: 'projects', component: AfProjectsComponent },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: AfLandingPageComponent,
      },
      { path: '**', component: AfLandingPageComponent },
      // { enableTracing: true } // <-- debugging purposes only
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
