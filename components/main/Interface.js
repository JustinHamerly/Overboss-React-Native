import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import NewGameForm from "./NewGameForm";

export default function Interface() {
  return (
    <View style={styles.interface}>

      <NewGameForm />
    </View>
  )
}

const styles = StyleSheet.create({
  interface:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  bodyText: {
    fontSize: 20
  }
})