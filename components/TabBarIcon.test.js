import React from 'react'
import renderer from 'react-test-renderer'
import TabBarIcon from './TabBarIcon'

test('renders correctly', () => {
  const tree = renderer.create(<TabBarIcon />).toJSON()
  expect(tree).toMatchSnapshot()
})
