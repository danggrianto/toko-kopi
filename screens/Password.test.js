import React from 'react'
import renderer from 'react-test-renderer'
import Password from './Password'

test('renders correctly', () => {
  const tree = renderer.create(<Password />).toJSON()
  expect(tree).toMatchSnapshot()
})
