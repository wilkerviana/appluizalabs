import { Component, OnInit, VERSION, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  panelOpenState: boolean;

  scan = "/scanner";

  constructor() {}

  ngOnInit() {}
}
