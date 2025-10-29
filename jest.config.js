export default {
  // Use jsdom to allow React Testing Library to access DOM APIs
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": ["babel-jest"],
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  moduleFileExtensions: ["js", "jsx", "json"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
