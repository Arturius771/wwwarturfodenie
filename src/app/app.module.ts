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
import { AfProjectCapsuleComponent } from './lib/components/af-project-capsule/af-project-capsule.component';
import { AfUniversityProjectCapsuleComponent } from './lib/components/af-university-project-capsule/af-university-project-capsule.component';
import { AfToggleButtonComponent } from './lib/components/af-toggle-button/af-toggle-button.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AfResourceComponent } from './lib/components/af-resource/af-resource.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AfImageComponent } from './lib/components/af-image/af-image.component';
import { HttpClientModule } from '@angular/common/http';
import { AfWebsiteLinkComponent } from './lib/components/af-website-link/af-website-link.component';

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
    AfToggleButtonComponent,
    LandingPageComponent,
    AfResourceComponent,
    AfImageComponent,
    AfWebsiteLinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
