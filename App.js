import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Header - navbar drawer, logo, login/logout
        </Text>
      </View>
      <View>
        <Text style={styles.bodyText}>
          Game Interface
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65278E',
    width: '100%',
    height: '10%',
  },
  headerText: {
    fontSize: 25
  },
  bodyText: {
    fontSize: 20
  }
});
