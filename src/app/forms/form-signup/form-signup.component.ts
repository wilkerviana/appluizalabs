import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-signup",
  templateUrl: "./form-signup.component.html",
  styleUrls: ["./form-signup.component.scss"]
})
export class FormSignupComponent implements OnInit {
  registerShop: string = "/register-shop";

  constructor() {}

  ngOnInit() {}
}
