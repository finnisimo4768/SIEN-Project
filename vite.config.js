import { defineConfig } from "vite"; // Function to define Vite configuration with typing and autocompletion.
import react from "@vitejs/plugin-react-swc"; // Plugin for optimizing JSX and TypeScript transformation using SWC, which is faster than Babel.

export default defineConfig({
  plugins: [react()], // Integrates the React plugin for JSX/TSX transpilation.
  test: {
    environment: "jsdom", // Configures the test environment to simulate a browser DOM using jsdom, useful for testing React components.
    globals: true, // Enables the use of global variables like `describe`, `it`, and `expect` without needing to import them explicitly.
    setupFiles: "./src/setupTests.js", // Specifies a file to set up the test environment (e.g., global mocks or initial configuration).
  },
});
