import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { TutorialScreenComponent } from "./tutorial-screen/tutorial-screen.component";
import { AppRoutingModule } from ".//app-routing.module";
import { FormsComponent } from "./forms/forms.component";
import { FormSignupComponent } from "./forms/form-signup/form-signup.component";
import { FormLoginComponent } from "./forms/form-login/form-login.component";
import { ErrorsModule } from "./errors/errors.module";

@NgModule({
  declarations: [
    AppComponent,
    TutorialScreenComponent,
    FormsComponent,
    FormSignupComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTabsModule,
    AppRoutingModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
