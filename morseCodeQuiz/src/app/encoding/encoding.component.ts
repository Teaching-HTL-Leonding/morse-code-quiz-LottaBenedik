import { Component, OnInit } from '@angular/core';
import { EncodeDecodeService } from '../encode-decode.service';


@Component({
  selector: 'app-encoding',
  templateUrl: './encoding.component.html',
  styleUrls: ['./encoding.component.css']
})
export class EncodingComponent{

  messageToEncode: string = "";
  encodedMessage: string = "";
  errorMessage:string = "";

  constructor(public encoder:EncodeDecodeService) { }

  public encodingProcess(): void {
    this.encodedMessage = this.encoder.encodeMessage(this.messageToEncode);
  }

  public isValid(): boolean {
    //check if messageToEncode is only filled with capital letters
    if(this.messageToEncode.match(/^[A-Z\s]+$/)){
      return true;
    }
    else{
      return false;
    }
  }

}
