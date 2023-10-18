module.exports = {
  testMatch: ['**/test/**/test_*.+(ts|tsx)'],
  transform: { '^.+\\.(ts|tsx)$': '@swc/jest' },
  // transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  // setupFiles: ['jest-plugin-context/setup'],
}
