import React from 'react';
import renderer from 'react-test-renderer';

import Cards from './Cards';

test('Snapshot', () => {
  const component = renderer.create(
    <Cards />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
