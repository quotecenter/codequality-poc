module.exports = {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}"
    ],
    "testResultsProcessor": "jest-sonar-reporter",
    "moduleNameMapper": {
      "\\.(css|scss)$": "identity-obj-proxy"
    },
    "transform": {
      "^.+\\.js$": "babel-jest"
    },
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleDirectories": [
      "node_modules"
    ]
  };
