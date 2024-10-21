import { Dimensions } from "react-native"

export const {width: windowWidth, height: windowHeight} = Dimensions.get('window')


export const getMusicNoteAnimation = (animationValue, isRotetedLeft) => {
    return {
        transform: [
            {
              translateX: animationValue.interpolate({
                inputRange: [0 , 1],
                outputRange: [8, -16]
              })
            },
            {
              translateY: animationValue.interpolate({
                inputRange: [0 , 1],
                outputRange: [0, -32]
              })
            },
            {
              rotate: animationValue.interpolate({
                inputRange: [0 , 1],
                outputRange: ['0deg', isRotetedLeft ? '-45deg' : '45deg']
              })
            }
          ],
          opacity: animationValue.interpolate({
            inputRange: [0, 0.8, 1],
            outputRange: [0 , 1 , 0]
          })
    }
}