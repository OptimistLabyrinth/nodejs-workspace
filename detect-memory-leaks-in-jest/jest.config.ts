module.exports = {
  testMatch: ['**/test/**/test_*.+(ts|tsx)'],
  transform: { '^.+\\.(ts|tsx)$': '@swc/jest' },
  // setupFiles: ['jest-plugin-context/setup'],
}
