import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

test('Snapshot', () => {
  const component = renderer.create(
    <Header />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
