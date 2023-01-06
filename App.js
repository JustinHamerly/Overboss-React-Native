import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/header/Header';
import Interface from './components/main/Interface';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <Header style={styles.header}/>
      <Interface style={styles.interface}/>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#EBD475',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    flex: 2
  },
  interface: {
    flex: 4
  }
});
