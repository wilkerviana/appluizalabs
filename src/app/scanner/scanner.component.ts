import { Component, VERSION, OnInit, ViewChild } from "@angular/core";
import { ZXingScannerComponent } from "@zxing/ngx-scanner";
import { Result } from "@zxing/library";

@Component({
  selector: "app-scanner",
  templateUrl: "./scanner.component.html",
  styleUrls: ["./scanner.component.scss"]
})
export class ScannerComponent implements OnInit {
  ngVersion = VERSION.full;

  @ViewChild("scanner")
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  autofocusEnabled = true;

  home = "/home";
  formItem = "/form-item";

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  constructor() {}

  ngOnInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
    });

    this.scanner.camerasNotFound.subscribe(() => (this.hasDevices = false));
    this.scanner.scanComplete.subscribe(
      (result: Result) => (this.qrResult = result)
    );
    this.scanner.permissionResponse.subscribe(
      (perm: boolean) => (this.hasPermission = perm)
    );
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    console.debug("Devices: ", cameras);
    this.availableDevices = cameras;
  }

  handleQrCodeResult(resultString: string) {
    console.debug("Result: ", resultString);
    this.qrResultString = resultString;
  }

  scanCompleteHandler(c) {
    console.log("end");
  }

  // onDeviceSelectChange(selectedValue: string) {
  //   console.debug("Selection changed: ", selectedValue);
  //   this.currentDevice = this.scanner.getDeviceById(selectedValue);
  //   console.log(this.currentDevice);
  // }

  camerasFoundHandler(camera) {
    console.log(camera);
    this.currentDevice = camera[0];
    // camera.legth > 1
    //   ? (this.currentDevice = camera[1])
    //   : (this.currentDevice = camera[0]);
  }

  stateToEmoji(state: boolean): string {
    const states = {
      // not checked
      undefined: "❔",
      // failed to check
      null: "⭕",
      // success
      true: "✔",
      // can't touch that
      false: "❌"
    };

    return states["" + state];
  }
}
