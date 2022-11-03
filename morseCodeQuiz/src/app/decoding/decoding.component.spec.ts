import { EncodeDecodeService } from '../encode-decode.service';

describe ('decodingTest', () => {
  let decoder: EncodeDecodeService;

  it('should decode HELLO WORLD', () => {
    decoder = new EncodeDecodeService();
    expect(decoder.decodeMessage('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toEqual('HELLO WORLD');
  })

  it('should decode HELLO', () => {
    decoder = new EncodeDecodeService();
    expect(decoder.decodeMessage('.... . .-.. .-.. ---')).toEqual('HELLO');
  })

  it('should not decode Hello', () => {
    decoder = new EncodeDecodeService();
    expect(decoder.decodeMessage('.... . .-.. .-.. ---')).not.toEqual('Hello');
  })
})
