

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

npm install --save-dev jest

```

然后，创建一个测试文件（例如`createDebounce.test.js`）并添加以下测试代码：

```javascript

jest.mock('timers', () => ({
  setTimeout: jest.fn((callback, delay) => {
    // In a real test environment, you would not mock setTimeout to return a fake ID,
    // but for the purpose of this example, we'll just return a number.
    const fakeId = jest.fn(() => {}); // The ID would normally be a real timer ID
    fakeId.mockImplementationOnce(callback); // Call the callback immediately on the first call
    return fakeId as any; // Cast to any to avoid type errors
  }),
  clearTimeout: jest.fn(),
}));

createDebounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

describe('createDebounce', () => {
  let debouncedFn;

  beforeEach(() => {
    // Reset mocks before each test
    mockFunction.mockClear();
    jest.clearAllMocks();
    debouncedFn = createDebounce(mockFunction);
  });

  it('should call the function after the specified delay', () => {
    debouncedFn('arg1', 'arg2');

    // Since we mocked setTimeout to call the callback immediately,
    // the function should have been called.
    expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
    expect(setTimeout).toHaveBeenCalledTimes(1); // Ensure setTimeout was called
    expect(clearTimeout).not.toHaveBeenCalled(); // No timer to clear on first call
  });

  it('should clear the timer and not call the function when called again before the delay', () => {
    debouncedFn('arg1', 'arg2'); // This will call mockFunction immediately due to mock
    debouncedFn('arg3', 'arg4'); // This should clear the timer but not call mockFunction

    expect(mockFunction).toHaveBeenCalledTimes(1); // Should only have been called once
    expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2'); // With the first args
    expect(clearTimeout).toHaveBeenCalled(); // Ensure clearTimeout was called
    expect(setTimeout).toHaveBeenCalledTimes(2); // Two setTimeout calls (one was cleared)
  });

  it('should call the function with the latest arguments after the delay', () => {
    debouncedFn('arg1', 'arg2'); // Call with first args
    jest.runAllTimers(); // "Fast forward" the timers

    debouncedFn('arg3', 'arg4'); // Call with second args before delay expires
    jest.runAllTimers(); // Fast forward again to simulate delay expiration

    // Since the second call cleared the first timer, only the second args should be used
    expect(mockFunction).toHaveBeenCalledTimes(2);
    expect(mockFunction).toHaveBeenNthCalledWith(1, 'arg1', 'arg2');
    expect(mockFunction).toHaveBeenNthCalledWith(2, 'arg3', 'arg4');
  });

  it('should use the default delay if none is provided', () => {
    const debouncedWithDefaultDelay = createDebounce(mockFunction);
    debouncedWithDefaultDelay('arg');
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300); // Default delay
  });

  it('should use the provided delay', () => {
    const customDelay = 500;
    const debouncedWithCustomDelay = createDebounce(mockFunction, customDelay);
    debouncedWithCustomDelay('arg');
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), customDelay); // Custom delay
  });
});