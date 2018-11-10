import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class CodeScannedService {
  private codeReceived = new BehaviorSubject<string>("");
  currentCode = this.codeReceived as Observable<string>;

  constructor() {}

  newCodeScanned(code: string) {
    this.codeReceived.next(code);
  }
}
