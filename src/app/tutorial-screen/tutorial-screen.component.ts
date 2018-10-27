import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tutorial-screen",
  templateUrl: "./tutorial-screen.component.html",
  styleUrls: ["./tutorial-screen.component.scss"]
})
export class TutorialScreenComponent implements OnInit {
  formLogin: string = "/form-login";
  formSignUp: string = "/form-signup";

  constructor() {}

  ngOnInit() {}
}
