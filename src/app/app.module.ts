import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StudyRecordComponent } from './study-record/study-record.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AfProjectCapsuleComponent } from './af-project-capsule/af-project-capsule.component';
import { AfUniversityProjectCapsuleComponent } from './af-university-project-capsule/af-university-project-capsule.component';
import { AfShowMoreShowLess } from './af-show-more-show-less/af-show-more-show-less.component';
import { AfResourceComponent } from './af-resource/af-resource.component';
import { AfImageComponent } from './af-image/af-image.component';
import { AfWebsiteLinkComponent } from './af-website-link/af-website-link.component';
import { MatButtonModule } from '@angular/material/button';
import { AfButtonComponent } from './af-button/af-button.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    StudyRecordComponent,
    ProjectsComponent,
    NavbarComponent,
    AfProjectCapsuleComponent,
    AfUniversityProjectCapsuleComponent,
    AfShowMoreShowLess,
    LandingPageComponent,
    AfResourceComponent,
    AfImageComponent,
    AfWebsiteLinkComponent,
    AfButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
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
