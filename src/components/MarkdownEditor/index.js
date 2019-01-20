import React, { Component } from 'react'
import { View, Textarea } from 'native-base'

import MarkdownViewer from '../MarkdownViewer'

export default class MarkdownEditor extends Component {
  state = {
    markdownContent: '',
  }

  render() {
    const { markdownContent } = this.state

    return (
      <View>
        <Textarea
          value={markdownContent}
          onChangeText={text => this.setState({ markdownContent: text })}
        />
        <MarkdownViewer>{markdownContent}</MarkdownViewer>
      </View>
    )
  }
}
