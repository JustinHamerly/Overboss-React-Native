import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View, Pressable } from 'react-native';
import PlayerPicker from "./PlayerPicker";
import TerrainPicker from "./TerrainPicker";

export default function NewGameForm() {
  const [playerCount, setPlayerCount] = useState(1);
  const [players, setPlayers] = useState([]);
  const [terrain, setTerrain] = useState([]);
  const [terrainCount, setTerrainCount] = useState(0);

  const addTerrain = (name) => {
    setTerrain(prev => [...prev, name])
    setTerrainCount(prev => prev + 1)
  }

  const removeTerrain = (name) => {
    let filtered = terrain.filter(tName => tName !== name)
    setTerrain(filtered)
    setTerrainCount(prev => prev - 1)
  }

  const createNewGame = () => {

  }

  return (
    <View style={styles.form}>
      <Text style={styles.formHeader}>PLAYERS</Text>
      <View style={styles.players} >
        <PlayerPicker
          playerCount={playerCount}
          setPlayerCount={setPlayerCount}
          setPlayers={setPlayers}
        />
      </View>

      <Text style={styles.formHeader}>TERRAIN</Text>
      <ScrollView style={styles.scroll} >
        <TerrainPicker
          addTerrain={addTerrain}
          removeTerrain={removeTerrain}
          terrainCount={terrainCount}
        />
      </ScrollView>
      <Pressable style={styles.submitButton} onPress={createNewGame}>
        <Text style={styles.submitButtonText}>New Game</Text>
      </Pressable>
      <Text>{JSON.stringify(players)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: '95%',
    height: '90%'
  },
  players: {
    flex: 1,
    backgroundColor: '#65278E',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },
  scroll: {
    flex: 1,
    backgroundColor: '#65278E',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%'
  },
  formHeader: {
    fontSize: 25,
    color: '#FFF'
  },
  submitButton: {
    width: 200,
    backgroundColor: 'green',
    borderRadius: 10
  },
  submitButtonText: {
    fontSize: 25,
    color: '#FFF',
    padding: 10,
    textAlign: 'center'
  }
})

