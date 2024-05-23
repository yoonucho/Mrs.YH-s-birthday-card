// import type { Config } from "jest";
import type { JestConfigWithTsJest } from "ts-jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

// Add any custom config to be passed to Jest
const JestConfigWithTsJest = {
	preset: "ts-jest",
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	// Add more setup options before each test is run
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
	},
};

// Export a Jest configuration
export default createJestConfig(JestConfigWithTsJest);
