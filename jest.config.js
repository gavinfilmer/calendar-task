module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '^@boughtbymany/verktyg$':
      '<rootDir>/node_modules/@boughtbymany/verktyg/dist/verktyg.es.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/lib/__mocks__/fileMock.js',
    '(?<!/icons/.*).svg$': '<rootDir>/src/lib/__mocks__/fileMock.js',
    'feather-icons/(.*)$': '<rootDir>/node_modules/feather-icons/$1',
  },
  transform: {
    '\\.svg$': '<rootDir>/scripts/svg-transform.js',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@boughtbymany/verktyg|feather-icons))',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{js,vue}'],
  testMatch: ['<rootDir>/src/components/**/*.spec.[jt]s?(x)'],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
