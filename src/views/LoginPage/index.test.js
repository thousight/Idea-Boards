import React from 'react'
import renderer from 'react-test-renderer'

import LoginPage from './index'

describe('Login Page', () => {
  const render = renderer.create(<LoginPage />)

  it('should render', () => {
    expect(render).toBeDefined()
  })
})
