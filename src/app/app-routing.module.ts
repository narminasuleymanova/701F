import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";
import { CourseComponent } from "./components/course/course.component";
import { YoutubePlayerComponent } from "./components/youtube-player/youtube-player.component";
import { GroupsComponent } from "./components/groups/groups.component";
import { KimyaComponent } from "./components/kimya/kimya.component";
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { BlurComponent } from "./components/blur/blur.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToHome = () => redirectLoggedInTo(["home"]);

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LandingComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: "sign-up",
    component: SignUpComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {path: "payment",
  component: GroupsComponent,},

  {
    path: "home",
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToLogin),
    children: [ { path: "math", component: YoutubePlayerComponent},
    { path: "course", component: CourseComponent},
    { path: "mycourses", component: KimyaComponent},
    { path: "video-player", component: VideoPlayerComponent},
    { path: "not-available", component: BlurComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
