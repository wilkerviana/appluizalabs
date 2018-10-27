import { HomeComponent } from "./home/home.component";
import { StatusComponent } from "./status/status.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";

import { TutorialScreenComponent } from "./tutorial-screen/tutorial-screen.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { FormSignupComponent } from "./forms/form-signup/form-signup.component";
import { FormLoginComponent } from "./forms/form-login/form-login.component";
import { FormsComponent } from "./forms/forms.component";

const routes: Routes = [
  {
    path: "",
    component: TutorialScreenComponent
  },
  {
    path: "form-signup",
    component: FormSignupComponent
  },
  {
    path: "form-login",
    component: FormLoginComponent
  },
  {
    path: "register-shop",
    component: FormsComponent
  },
  {
    path: "status",
    component: StatusComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
