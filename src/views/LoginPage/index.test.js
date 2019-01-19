import React from 'react'
import renderer from 'react-test-renderer'

import LoginPage from './index'

describe('Login Page', () => {
  const render = renderer.create(<LoginPage />)

  expect(render).toBeDefined()
})
