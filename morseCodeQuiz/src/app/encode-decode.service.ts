import { Injectable } from '@angular/core';
const morseCode = [
  /* A */ '.-',
  /* B */ '-...',
  /* C */ '-.-.',
  /* D */ '-..',
  /* E */ '.',
  /* F */ '..-.',
  /* G */ '--.',
  /* H */ '....',
  /* I */ '..',
  /* J */ '.---',
  /* K */ '-.-',
  /* L */ '.-..',
  /* M */ '--',
  /* N */ '-.',
  /* O */ '---',
  /* P */ '.--.',
  /* Q */ '--.-',
  /* R */ '.-.',
  /* S */ '...',
  /* T */ '-',
  /* U */ '..-',
  /* V */ '...-',
  /* W */ '.--',
  /* X */ '-..-',
  /* Y */ '-.--',
  /* Z */ '--..',
];

@Injectable({
  providedIn: 'root'
})
export class EncodeDecodeService {

  constructor() { }

  public encodeMessage(messageToEncode: string): string {
    let encodedMessage: string = "";

    messageToEncode = messageToEncode.replace(/\s+/g, ' ');
    messageToEncode = messageToEncode.trim();

    for (let i = 0; i < messageToEncode.length; i++) {
      if(messageToEncode[i] === " "){
        encodedMessage += "/";
      }
      else{
        encodedMessage += morseCode[messageToEncode.charCodeAt(i) - 65] + " ";
      }
    }
    encodedMessage = encodedMessage.trim();
    return encodedMessage;

  }

  public decodeMessage(messageToDecode: string): string {
    messageToDecode = messageToDecode.replace(/\s+/g, ' ');
    messageToDecode = messageToDecode.trim();

    let decodedMessage: string = "";

    console.log(messageToDecode);
    let morseCodeArray: string[] = messageToDecode.split(" ");


    for (let i = 0; i < morseCodeArray.length; i++) {

      if(morseCodeArray[i] === "/"){
        decodedMessage += " ";
      }
      else{
        decodedMessage += String.fromCharCode(morseCode.indexOf(morseCodeArray[i]) + 65);
      }

    }
    return decodedMessage;
  }



}
