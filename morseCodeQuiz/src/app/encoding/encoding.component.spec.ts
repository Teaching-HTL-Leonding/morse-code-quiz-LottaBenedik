import { EncodeDecodeService } from '../encode-decode.service';

describe ('encodingTests', () => {
  let decoder: EncodeDecodeService;

  it('should encode HELLO WORLD', () => {
    decoder = new EncodeDecodeService();
    expect(decoder.encodeMessage('HELLO WORLD')).toEqual('.... . .-.. .-.. --- /.-- --- .-. .-.. -..');
  })

  it('should encode HELLO', () => {
    decoder = new EncodeDecodeService();
    expect(decoder.encodeMessage('HELLO')).toEqual('.... . .-.. .-.. ---');
  })

  it('should not encode Hello', () => {
    decoder = new EncodeDecodeService();
    expect(decoder.encodeMessage('HELLO')).not.toEqual('Hello');
  })
})
