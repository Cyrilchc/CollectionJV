import { ParseBoolPipe } from './parse-bool.pipe';

describe('ParseBoolPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseBoolPipe();
    expect(pipe).toBeTruthy();
  });
});
