import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>
        Getting Weather!
      </Text>
      <Text style={styles.innerSmallText}>
        made with Expo (React Native)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  innerText: {
    color: "#2C2C2C",
    fontSize: 30,
    marginTop: '1%'
  },
  innerSmallText: {
    color: "#4C4C4C",
    fontSize: 10,
    paddingLeft: 80,
    fontWeight: "bold"
  }
});

export default Loading;
