import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import Interface from './components/Interface';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header />
      <Interface />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EBD475',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
