import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React-Native Facu Loria!</Text>
      <Text>Empezando..</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DB5D3E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
