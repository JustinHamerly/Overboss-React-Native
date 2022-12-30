import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Interface() {
  return (
    <View>
      <Text style={styles.bodyText}>
        Game Interface
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bodyText: {
    fontSize: 20
  }
})