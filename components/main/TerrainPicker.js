import React from 'react'
import { Button, View, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';

const terrainTypes = require('../../assets/terrainTypes');
const terrainKeys = Array.from(terrainTypes.default.keys());

const TerrainPicker = (props) => {

  const pickRandomNumber = () => {
    return Math.floor(Math.random() * (terrainKeys.length));
  }

  const handleRandom = (e) => {
    for (let i = 0; i < terrainKeys.length; i++) {
      checkBoxes[i].checked = false;
      props.setTerrainCount(0);
    }

    let selectedTypes = [];

    for (let i = 0; i < 5; i++) {
      let randomBox = checkBoxes[pickRandomNumber(terrainKeys)];
      while (randomBox.checked) {
        randomBox = checkBoxes[pickRandomNumber(terrainKeys)];
      }
      randomBox.checked = true;
      selectedTypes.push(randomKey.value);
    }

    props.setTerrain(selectedTypes);
    props.setTerrainCount(5);
  }

  const handleCheckbox = (e) => {
    if(e.target.checked === true){
      props.setTerrainCount(prev => prev + 1);
      props.setTerrain(prev => [...prev, e.target.value]);
    }else{
      props.setTerrainCount(prev => prev - 1);
      props.setTerrain(prev => prev.filter(item => item !== e.target.value));
    }
  }

  return (
    <>
      <Button id='randomFive' title='pickRandom' onClick={() => handleRandom()}>PICK RANDOM FIVE TERRAIN</Button>
      <View style={styles.picker}>
        {
          terrainKeys.map(key => {
            return (
              <Checkbox name={key} key={key} addTerrain={props.addTerrain} removeTerrain={props.removeTerrain}/>
            )
          })
        }
      </View>
    </>
  )
}

export default TerrainPicker



const styles = StyleSheet.create({
  picker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
