jest.mock("@lickhome/common/src/utils/monitoring/logger", () => ({
  createLogger: jest.fn(() => {
    return {
      debug: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };
  }),
  sendLog: {
    debug: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
}));
