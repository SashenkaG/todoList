import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Task } from '../src/Components/Task'; 

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
            {
                taskItems.map((item, index) =>{
                    return (
                        <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                             <Task text={item}/>
                        </TouchableOpacity>
                    ) 
                })
            }
        </View>
      </View>

      {/*write a task*/}

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style= {styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={task =>setTask(test)}/>

            <TouchableOpacity onPress={() => handleAddTask}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}> +</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    width: 250,

  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius:60 ,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  addText:{},
});
