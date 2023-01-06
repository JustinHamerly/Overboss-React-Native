import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu-open" size={24} color="#EBE5F3" />
      <Text style={styles.headerText}>
        Overboss Companion
      </Text>
      <MaterialCommunityIcons name="account-cog" size={24} color="#EBE5F3" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#65278E',
    width: '100%',
    padding: 10
  },
  headerText: {
    fontSize: 25,
    color: '#F8F0BF',
    padding: 10
  },
})