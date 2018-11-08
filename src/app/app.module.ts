import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material";
import { MatStepperModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { MatExpansionModule } from "@angular/material/expansion";

import { AppComponent } from "./app.component";
import { TutorialScreenComponent } from "./tutorial-screen/tutorial-screen.component";
import { MatMenuModule, MatMenu } from "@angular/material/menu";
import { AppRoutingModule } from ".//app-routing.module";
import { FormsComponent } from "./forms/forms.component";
import { FormSignupComponent } from "./forms/form-signup/form-signup.component";
import { FormLoginComponent } from "./forms/form-login/form-login.component";
import { ErrorsModule } from "./errors/errors.module";
import { StatusComponent } from "./status/status.component";
import { HomeComponent } from "./home/home.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { ZXingScannerModule } from "@zxing/ngx-scanner";

@NgModule({
  declarations: [
    AppComponent,
    TutorialScreenComponent,
    FormsComponent,
    FormSignupComponent,
    FormLoginComponent,
    StatusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    AppRoutingModule,
    ErrorsModule,
    ZXingScannerModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [{ provide: MatStepperModule }],
  exports: [MatStepperModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
