module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
