import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { ProjectCapsuleComponent } from './components/project-capsule/project-capsule.component';
import { ResourceComponent } from './components/resource/resource.component';
import { ShowMoreShowLess } from './components/show-more-show-less/show-more-show-less.component';
import { UniversityProjectCapsuleComponent } from './components/university-project-capsule/university-project-capsule.component';
import { WebsiteLinkComponent } from './components/website-link/website-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StudyRecordComponent } from './components/study-record/study-record.component';
import { StoreModule } from '@ngrx/store';
import { studyRecordReducer } from './components/study-record/study-record.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    StudyRecordComponent,
    ProjectsComponent,
    NavbarComponent,
    ProjectCapsuleComponent,
    UniversityProjectCapsuleComponent,
    ShowMoreShowLess,
    LandingPageComponent,
    ResourceComponent,
    ImageComponent,
    WebsiteLinkComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    StoreModule.forRoot({ studyRecord: studyRecordReducer }),
    MatCardModule,
    RouterModule.forRoot([
      { path: 'home', component: LandingPageComponent },
      { path: 'study-record', component: StudyRecordComponent },
      { path: 'projects', component: ProjectsComponent },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: LandingPageComponent,
      },
      { path: '**', component: LandingPageComponent },
      // { enableTracing: true } // <-- debugging purposes only
    ]),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
