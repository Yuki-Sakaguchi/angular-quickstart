import { TruncatePipe } from './truncate.pipe';

describe('truncateパイプのテスト', () => {
  let pipe = new TruncatePipe();
  let msg = '1234567890123456789012345678901234567890123456789012345';

  it('デフォルトの挙動', () => {
    expect(pipe.transform(msg)).toEqual(
      '12345678901234567890123456789012345678901234567890...');
  });

  it('パラメーターの確認', () => {
    expect(pipe.transform(msg, 5, '～')).toEqual('12345～');
  });
});