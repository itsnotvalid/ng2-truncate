import { Ng2TruncatePipe } from '../dist/ng2-truncate.pipe';

import {
  beforeEach,
  describe,
  expect,
  it
} from '@angular/core/testing';

describe('Ng2TruncatePipe', () => {

  let pipe: Ng2TruncatePipe;

  beforeEach(() => {
    pipe = new Ng2TruncatePipe();
  });

  it('transforms "123456789" to "123..."', () => {
    expect(pipe.transform('123456789', 4)).toEqual('1234...');
  });

  it('transforms "123456789" to "123xxx"', () => {
    expect(pipe.transform('123456789', 4, 'xxx')).toEqual('1234xxx');
  });

  it('transforms "1234 5678" to "123..."', () => {
    expect(pipe.transform('1234 5678', 3)).toEqual('123...');
  });

  it('leaves "123" unchanged', () => {
    expect(pipe.transform('123', 3)).toEqual('123');
  });

  it('leaves "12" unchanged', () => {
    expect(pipe.transform('12', 3)).toEqual('12');
  });

  it('leaves empty string unchanged', () => {
    expect(pipe.transform('', 3)).toEqual('');
  });
});
