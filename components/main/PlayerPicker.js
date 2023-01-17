import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { StyleSheet, TextInput, View, Text } from 'react-native';

const PlayerPicker = (props) => {
  
  return (
    <View style={styles.playerCount}>
      <Picker
        style={styles.picker}
        selectedValue={props.playerCount}
        onValueChange={(itemValue) => props.setPlayerCount(itemValue)}
      >
        <Picker.Item label='1' value={1} />
        <Picker.Item label='2' value={2} />
        <Picker.Item label='3' value={3} />
        <Picker.Item label='4' value={4} />
      </Picker>
      <View>
        {Array(props.playerCount).fill('p').map((player, i) => {
          return (
            <TextInput
              key={`player${i + 1}`}
              style={styles.formTextInput}
              placeholder={`enter player ${i + 1}`}
              onChange={name => props.setPlayers(prev => prev[i] = name)}
            ></TextInput>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  playerCount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  picker: {
    display: 'flex',
    justifyContent: 'center',
    width: 75,
    backgroundColor: '#FFF',
    borderColor: '#119047',
    borderWidth: 3,
    borderRadius: '25%',
    height: 75
  },
  formTextInput: {
    borderColor: '#119047',
    borderWidth: 3,
    borderRadius: '10%',
    padding: 5,
    margin: 5,
    width: 200,
    backgroundColor: '#FFF'
  }
})

export default PlayerPicker