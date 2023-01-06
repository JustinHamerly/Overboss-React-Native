import React, { useState } from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'

const Checkbox = ({name, removeTerrain, addTerrain}) => {
  const [checked, setChecked] = useState(false)
  const handlePress = () => {
    if(checked){
      removeTerrain(name)
    }else{
      addTerrain(name)
    }
    setChecked(prev => !prev)
  }
  return (
    <Pressable style={[styles.checkbox, checked && {backgroundColor: 'green'}]} onPress={handlePress}>
      <Text style={[styles.text, checked && {color: 'white'}]}>{name}</Text>
    </Pressable>
  )
}

export default Checkbox

const styles = StyleSheet.create({
  checkbox: {
    width: 100,
    height: 45,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBD475',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#EBD475'
  },
  text: {
    color: 'purple',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})