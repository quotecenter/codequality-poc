module.exports = {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}"
    ],
    "setupFilesAfterEnv": [
        '<rootDir>/testSetup.js',
    ],
    "testResultsProcessor": "jest-sonar-reporter",
    "moduleNameMapper": {
      "\\.(css|scss)$": "identity-obj-proxy"
    },
    "transform": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js" ,
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
