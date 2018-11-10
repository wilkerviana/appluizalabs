import { CodeScannedService } from "./../_shared/services/code-scanned.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-item",
  templateUrl: "./form-item.component.html",
  styleUrls: ["./form-item.component.scss"]
})
export class FormItemComponent implements OnInit {
  constructor(private codeScanned: CodeScannedService) {}

  ngOnInit() {
    this.codeScanned.currentCode.subscribe(code =>
      console.log("receivedCode", code)
    );
  }
}
