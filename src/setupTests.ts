import util from 'util';

const { error: originalError } = console;

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    originalError(...args);
    // @ts-ignore
    const error = util.format.apply(this, args);
    throw new Error(error);
  });
});

afterAll(() => {
  // @ts-ignore
  console.error.mockRestore();
});

afterEach(() => {
  // @ts-ignore
  console.error.mockClear();
});
