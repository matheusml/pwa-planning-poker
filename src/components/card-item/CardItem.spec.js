import React from 'react';
import renderer from 'react-test-renderer';

import CardItem from './CardItem';

const props = {
  value: 'value',
  toggleCard: () => {},
};

test('Snapshot', () => {
  const component = renderer.create(
    <CardItem {...props} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
