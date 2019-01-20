import React from 'react'
import MarkdownView from 'react-native-markdown-renderer'
import PropTypes from 'prop-types'

import rules from './rules'
import styles from './styles'

const MarkdownViewer = ({ children }) => (
  <MarkdownView style={styles} rules={rules}>
    {children}
  </MarkdownView>
)

MarkdownViewer.propTypes = {
  children: PropTypes.string,
}

MarkdownViewer.defaultProps = {
  children: '',
}

export default MarkdownViewer
