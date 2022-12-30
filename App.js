import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Header from './components/header/Header';
import Interface from './components/main/Interface';

export default function App() {
  return (

    <View style={styles.appContainer}>
      <Header />
      <Interface />
      <StatusBar style="auto" />
    </View >
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
