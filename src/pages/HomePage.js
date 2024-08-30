import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TodoListItem} from './src/Components/TodoListItem'

<View style={styles.container}>
    <View style ={styles.tasksWrapper}>
        <Text style ={styles.sectionTitle}>Today's Tasks</Text>
        <View style ={styles.items}>
            <TodoListItem />
        </View>
    </View> 

</View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper:{},
sectionTitle:{},
items:{},
  });
