import React from 'react'
import { Text } from 'native-base'
import { getUniqueID } from 'react-native-markdown-renderer'

const rules = {
  heading1: (node, children, parent, styles) => (
    <Text key={getUniqueID()} style={[styles.heading, styles.heading1]}>
      {children}
    </Text>
  ),
  heading2: (node, children, parent, styles) => (
    <Text key={getUniqueID()} style={[styles.heading, styles.heading2]}>
      {children}
    </Text>
  ),
  heading3: (node, children, parent, styles) => (
    <Text key={getUniqueID()} style={[styles.heading, styles.heading3]}>
      {children}
    </Text>
  ),
}

export default rules
