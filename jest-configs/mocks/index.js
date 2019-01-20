jest.mock(
  'react-native-markdown-renderer',
  () => require.requireActual('./react-native-markdown-renderer').default,
)
