

cssUtils = {
  processedCssPx: (param: string | number) => {
    if (typeof param === 'number') {
      return `${param}px`;
    }
    if (typeof param === 'string') {
      if (param.endsWith('px')) {
        return param;
      } else {
        // 注意：这里我们添加了一个错误处理，以防param不是一个有效的数字字符串
        const parsed = parseInt(param, 10);
        if (isNaN(parsed)) {
          throw new Error(`Invalid CSS pixel value: ${param}`);
        }
        return `${parsed}px`;
      }
    }
  }
}

{
  processedCssPx: (param: string | number) => {
    if (typeof param === 'number') {
      return `${param}px`;
    }
    if (typeof param === 'string') {
      if (param.endsWith('px')) {
        return param;
      } else {
        // 注意：这里我们添加了一个错误处理，以防param不是一个有效的数字字符串
        const parsed = parseInt(param, 10);
        if (isNaN(parsed)) {
          throw new Error(`Invalid CSS pixel value: ${param}`);
        }
        return `${parsed}px`;
      }
    }
  }
}

describe('processedCssPx', () => {
  // 测试数字输入
  test('should return px string for number input', () => {
    expect(cssUtils.processedCssPx(10)).toBe('10px');
    expect(cssUtils.processedCssPx(0)).toBe('0px');
    expect(cssUtils.processedCssPx(-5)).toBe('-5px');
  });

  // 测试以px结尾的字符串输入
  test('should return the same string for px ending input', () => {
    expect(cssUtils.processedCssPx('10px')).toBe('10px');
    expect(cssUtils.processedCssPx('0px')).toBe('0px');
    expect(cssUtils.processedCssPx('-5px')).toBe('-5px');
  });

  // 测试不以px结尾的字符串输入
  test('should return px string for non-px ending string input', () => {
    expect(cssUtils.processedCssPx('10')).toBe('10px');
    expect(cssUtils.processedCssPx('0')).toBe('0px');
    expect(cssUtils.processedCssPx('-5')).toBe('-5px');
    expect(cssUtils.processedCssPx('10.5')).toBe('10px'); // 注意：这里我们简单地将小数截断为整数
  });

  // 测试无效字符串输入（不是数字）
  test('should throw an error for invalid string input', () => {
    expect(() => cssUtils.processedCssPx('abc')).toThrowError(/Invalid CSS pixel value: abc/);
    expect(() => cssUtils.processedCssPx('10px5')).toThrowError(/Invalid CSS pixel value: 10px5/);
  });
});