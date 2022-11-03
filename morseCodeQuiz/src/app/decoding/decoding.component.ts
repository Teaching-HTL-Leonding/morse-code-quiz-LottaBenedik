import { Component, OnInit } from '@angular/core';
import { EncodeDecodeService } from '../encode-decode.service';

@Component({
  selector: 'app-decoding',
  templateUrl: './decoding.component.html',
  styleUrls: ['./decoding.component.css']
})
export class DecodingComponent{

  messageToDecode: string = "";
  decodedMessage: string = "";
  canBeDecoded:boolean = true;

  constructor(public decoder: EncodeDecodeService) { }


  public decodingProcess(): void {
    this.decodedMessage = this.decoder.decodeMessage(this.messageToDecode);
  }

  public isValid(): boolean {
    console.log(this.messageToDecode);
    if(this.messageToDecode.match(/^[.\-/ ]+$/)){
      console.log("the input is valid");
      return true;
    }
    else{
      console.log("the input is invalid");
      return false;
    }
  }

}
