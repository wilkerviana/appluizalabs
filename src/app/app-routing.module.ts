import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";

import { TutorialScreenComponent } from "./tutorial-screen/tutorial-screen.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { FormSignupComponent } from "./forms/form-signup/form-signup.component";
import { FormLoginComponent } from "./forms/form-login/form-login.component";

const routes: Routes = [
  {
    path: "",
    component: TutorialScreenComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },
  {
    path: "form-signup",
    component: FormSignupComponent
  },
  {
    path: "form-login",
    component: FormLoginComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
