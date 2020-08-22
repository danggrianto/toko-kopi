import React from 'react'
import renderer from 'react-test-renderer'
import Signup from './Signup'

test('renders correctly', () => {
  const tree = renderer.create(<Signup />).toJSON()
  expect(tree).toMatchSnapshot()
})
