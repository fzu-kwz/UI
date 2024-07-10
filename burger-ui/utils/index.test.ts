

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

npm install --save-dev jest
# 或者

yarn add --dev jest

```

然后，我们可以创建一个名为`debounce.test.js`的文件，并在其中编写以下单元测试：

```javascript

describe('createDebounce', () => {
  it('should call the function after the specified delay', (done) => {
    debouncedFn('arg1', 'arg2');
    expect(testFn).not.toHaveBeenCalled(); // 立即调用后，原始函数不应被调用

    setTimeout(() => {
      expect(testFn).toHaveBeenCalledTimes(1); // 在指定的延迟后，原始函数应该被调用一次
      expect(testFn.mock.calls[0][0]).toBe('arg1'); // 检查参数是否正确
      expect(testFn.mock.calls[0][1]).toBe('arg2');
      done(); // 完成异步测试
    }, 15); // 由于我们设置了10ms的延迟，这里稍微等待久一点以确保setTimeout被触发
  });

  it('should not call the function if invoked multiple times within the delay', (done) => {
    debouncedFn('arg1', 'arg2');
    debouncedFn('arg3', 'arg4'); // 在延迟期间再次调用

    setTimeout(() => {
      expect(testFn).toHaveBeenCalledTimes(1); // 只应调用一次
      expect(testFn.mock.calls[0][0]).toBe('arg1'); // 检查参数是否是第一次调用的参数
      expect(testFn.mock.calls[0][1]).toBe('arg2');
      done();
    }, 20); // 等待足够长的时间以确保最后一次setTimeout被触发
  });

  it('should call the function with the most recent set of arguments', (done) => {
    debouncedFn('arg1', 'arg2');
    setTimeout(() => {
      debouncedFn('arg3', 'arg4'); // 在第一次setTimeout触发后但延迟未结束时调用
    }, 5);

    setTimeout(() => {
      expect(testFn).toHaveBeenCalledTimes(1); // 只应调用一次
      expect(testFn.mock.calls[0][0]).toBe('arg3'); // 检查参数是否是最后一次调用的参数
      expect(testFn.mock.calls[0][1]).toBe('arg4');
      done();
    }, 20); // 等待足够长的时间以确保最后一次setTimeout被触发
  });

  // 其他可能的测试用例，例如测试清除定时器、默认延迟等
});

```

请注意，由于JavaScript的事件循环和setTimeout的异步性质，我们在测试这些函数时需要小心处理异步操作。Jest的`done`回调函数允许我们在测试完成时通知Jest。此外，我们还使用了Jest的mock功能来跟踪`testFn`的调用和参数。

要运行这些测试，只需在终端中进入测试文件所在的目录，并执行以下命令（取决于你安装Jest的方式）：

```bash

debounce.test.js

或者

debounce.test.js

或者，如果你已经在package.json中配置了Jest脚本

npm test
});