import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  paragraph: {
    marginTop: 5,
    marginBottom: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  listItem: {
    marginTop: -6,
  },
  listUnorderedItemIcon: {
    marginLeft: 10,
    marginRight: 5,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        lineHeight: 10,
      },
      android: {
        lineHeight: 10,
      },
    }),
  },
})
