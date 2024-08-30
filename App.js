import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TodoListItem } from './src/Components/TodoListItem';
import { HomePage } from './src/pages/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <HomePage /> 
      <StatusBar style="auto" />
    </View>
  );
}


