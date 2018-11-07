import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements OnInit {
  formLogin: string = "/form-login";

  constructor() {}

  ngOnInit() {}
}
