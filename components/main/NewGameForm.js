import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'

export default function NewGameForm() {
  const [playerCount, setPlayerCount] = useState(1)

  return (
    <View style={styles.form}>
      <Text style={styles.formHeader}>PLAYERS</Text>
      <View style={styles.playerCount}>
        <Picker
          style={styles.picker}
          selectedValue={playerCount}
          onValueChange={(itemValue) => setPlayerCount(itemValue)}
        >
          <Picker.Item label='1' value={1} />
          <Picker.Item label='2' value={2} />
          <Picker.Item label='3' value={3} />
          <Picker.Item label='4' value={4} />
        </Picker>
        <View>

          {
            Array(playerCount).fill('p').map((player, i) => {
              return (
                <TextInput
                  key={`player${i + 1}`}
                  style={styles.formTextInput}
                  placeholder={`enter player ${i + 1}`}
                ></TextInput>
              )
            })
          }
        </View>
      </View>
      <Text style={styles.formHeader}>TERRAIN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65278E',
    padding: 10,
    borderRadius: 10,
    width: '95%',
    marginTop: 20,
    marginBottom: 20
  },
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
  formHeader: {
    fontSize: 25,
    color: '#FFF'
  },
  formLabel: {
    fontSize: 10,
    color: '#FFF'
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

