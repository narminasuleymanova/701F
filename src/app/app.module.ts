import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { CourseComponent } from './components/course/course.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { KimyaComponent } from './components/kimya/kimya.component';
import { AzDiliComponent } from './components/az-dili/az-dili.component';
import { GroupsComponent } from './components/groups/groups.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { MathComponent } from './components/math/math.component';
import { BlurComponent } from './components/blur/blur.component';
import { Math2Component } from './math2/math2.component';
import { SaitComponent } from './sait/sait.component';
import { SamitFirstPartComponent } from './samit-first-part/samit-first-part.component';
import { SamitSecondPartComponent } from './samit-second-part/samit-second-part.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CourseComponent,
    YoutubePlayerComponent,
    KimyaComponent,
    AzDiliComponent,
    GroupsComponent,
    VideoPlayerComponent,
    MathComponent,
    BlurComponent,
    Math2Component,
    SaitComponent,
    SamitFirstPartComponent,
    SamitSecondPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
