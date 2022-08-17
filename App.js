import React,{useState} from "react";
import {View, StyleSheet , FlatList, Text, Alert} from 'react-native';
import Header from "./components/Header";
import {uuid} from 'uuidv4';
import ListItem from "./components/Listitems";
import AddItem from "./components/addItem";
import { text } from "express";


const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (item) => {
    if(!text){
      Alert.alert("Error" , "Please enter an Item", {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return[{id: uuid(), text}, ...prevItems];
      });
    }
    
    
    
  }
  
  
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data = {items} renderItem ={({item}) =><ListItem item ={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    flex: 1, 
    paddingTop: 60,

  },
})

export default App;