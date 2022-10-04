global.console = {
  ...global.console,
  // console.warn are ignored in tests
  warn: jest.fn(),
  // console.error are ignored in tests
  error: jest.fn(),
  // console.dir are ignored in tests
  dir: jest.fn(),
  // Keep native behaviour for other methods, use those to print out things in your own tests
  log: console.log,
  info: console.info,
  debug: console.debug,
};

process.env = {
  ...process.env,
};

export {};