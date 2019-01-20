import React from 'react'
import renderer from 'react-test-renderer'

import MarkdownViewer from './index'

describe('MarkdownViewer', () => {
  const render = renderer.create(<MarkdownViewer># Title</MarkdownViewer>)

  it('should render', () => {
    expect(render).toBeDefined()
  })
})
