import { CodeScannedService } from "./../_shared/services/code-scanned.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-item",
  templateUrl: "./form-item.component.html",
  styleUrls: ["./form-item.component.scss"]
})
export class FormItemComponent implements OnInit {
  home = "/home";

  code: string;

  constructor(private codeScan: CodeScannedService) {}

  ngOnInit() {
    this.codeScan.currentCode.subscribe(code => {
      this.code = code;
      console.log("receivedCode", code);
    });
  }
}
