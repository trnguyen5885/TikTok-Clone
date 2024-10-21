import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation} from '@react-navigation/native'
import Animated, {FadeInDown} from 'react-native-reanimated'

const ProductItem = ({id, title, price, review, thumbnail}) => {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('Detail', {
      id: id
    })
  }

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={handleNavigation} > 
        <Animated.View entering={FadeInDown.delay(id * 200).duration(600).springify().damping(12)} style = {styles.mainBox}>
          <Image style = {{width: 130, height: 100 , resizeMode: 'contain'}} source={thumbnail} />
            <Text  style = {styles.title} >{title}</Text>
            <Text style = {styles.price} >{price}.000đ</Text>
            <View style = {styles.reviewContainer}>
              <Text style = {styles.reviewStar} >⭐</Text>
              <Text style = {styles.reviewText} >{review}</Text>
              <View style = {styles.line} ></View>
              <View style = {styles.soldContainer} >
                <Text style = {styles.soldText}>Đã bán 35K</Text>
               </View>
              
            </View>

            
            
            
        </Animated.View>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
      mainBox: {
          minWidth: 180,
          marginHorizontal: 5,
          marginTop: 10,
          padding: 20,
          flexDirection: 'column',
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 8,
          overflow: 'hidden',
      },
      title: {
          marginTop: 5,
          fontSize: 16,
          fontStyle: 'italic',
          alignSelf: 'flex-start',
          maxWidth: 150
      },
      price: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
      },
      reviewContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        columnGap: 6
      },
      reviewStar: {
        fontSize: 14
      },
      reviewText: {
        fontSize: 15
      },
      line: {
        width: 1,
        height: '100%',
        backgroundColor: 'grey'
      },
      soldText: {
        opacity: 0.7
      }
  })

  export default ProductItem