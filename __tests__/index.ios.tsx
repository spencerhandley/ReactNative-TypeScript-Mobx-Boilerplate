import 'react-native';
import * as React from 'react';
import Index from '../src/index.ios';

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Index />);
  expect(tree).toBeDefined();
});
