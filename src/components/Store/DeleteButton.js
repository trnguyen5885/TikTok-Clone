import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

const DeleteButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
     <View style = {styles.buttonContainer}>
     <Ionicons
        name="trash"
        size={24}
        color="white"
    />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: '50%',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3232',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 500,
        color: 'white'
    }
})

export default DeleteButton

