module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'react-hooks/exhaustive-deps': 0,
    'import/order': ['warn', {'newlines-between': 'always', 'groups': ['internal', 'external', 'builtin', 'index', 'sibling', 'parent', 'object']}],
  },
};
