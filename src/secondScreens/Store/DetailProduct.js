import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { PRODUCTS } from '../../data/dummy-data'
import Animated, {FadeInLeft, FadeInRight, useAnimatedStyle, useSharedValue, withSpring, withTiming} from 'react-native-reanimated';
import React, { useEffect,  useState } from 'react'
import BackIcon from '../../assets/SVG/BackIcon';
import HeartIcon from '../../assets/SVG/HeartIcon';
import CartIcon from '../../assets/SVG/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../redux/counterCartslice';
import cartSlice from '../../redux/cartSlice';

const DetailProduct = ({route , navigation}) => {

  const WIDTH = Dimensions.get('window').width;
  const { id } = route?.params;
  const shoesItem = PRODUCTS.find((item) => item.id === id)
  const [page, setPage] = useState(1);
  const [isAddtoCart, setIsAddToCart] = useState(false);
  const progress = useSharedValue(0);
  const scale = useSharedValue(2);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  
  
 

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
      {
        scale: scale.value
      },
      {
        translateX: translateX.value
      },
      {
        translateY: translateY.value
      },
    
    ]
    }
  },[])

  const ANIMATION_DURATION = 600;


  useEffect(() => {
     if(isAddtoCart) {
        progress.value = withTiming(1 , {duration: ANIMATION_DURATION})
        scale.value = withTiming(0.5, {duration: ANIMATION_DURATION})
       setTimeout(() => {
        translateX.value = withTiming(310, {duration: ANIMATION_DURATION})
        translateY.value = withTiming(-790, {duration: ANIMATION_DURATION})
       }, 600)

       setTimeout(() => {
        setIsAddToCart(false);
        dispatch(increment());
        dispatch(cartSlice.actions.addToCart({shoesItem}))
       },ANIMATION_DURATION * 2)

     } else {
      progress.value = 0;
      scale.value = 2;
      translateY.value = 0;
      translateX.value = 0;
     }

  },[isAddtoCart])

  function checkPage(offsetX) {
    const pageWidth = 393;
    const page = Math.floor(offsetX / pageWidth) + 1;
    setPage(Math.min(page, 5));
  }

  function handleAddToCart() {
    setIsAddToCart(true);
    
  }
  
  


  return (
    <View style = {styles.container}>
      <View style = {styles.backgroundGrey}>
        <SafeAreaView />
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8} >
            <View style = {styles.iconContainer}>
              <Animated.View entering={FadeInLeft.delay(200).duration(500)}>
               <BackIcon  />
              </Animated.View>
              <Animated.View style = {{flexDirection: 'row', alignItems: 'center', columnGap: 10}} entering={FadeInRight.delay(200).duration(500)}>
               <HeartIcon />
               <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Cart')} >
                  <CartIcon />
                  <Text style = {{position: 'absolute', right: 30, top: 20, color: 'white'}} >{counter}</Text>
               </TouchableOpacity>
              </Animated.View>
            </View>
          </TouchableOpacity>

        <ScrollView
         onScroll={e => {
          const offsetX = e.nativeEvent.contentOffset.x;
          checkPage(offsetX)
         }}
         style ={{width: WIDTH}}
         pagingEnabled={true}
         horizontal={true} 
         showsHorizontalScrollIndicator={false} 
         scrollEventThrottle={16}
         >
          <Image style = {{width: WIDTH, height: 140, resizeMode: 'contain', alignSelf: 'center'}} source={shoesItem.thumbnail} />
          <Image style = {{width: WIDTH, height: 140, resizeMode: 'contain', alignSelf: 'center'}} source={shoesItem.thumbnail} />
          <Image style = {{width: WIDTH, height: 140, resizeMode: 'contain', alignSelf: 'center'}} source={shoesItem.thumbnail} />
          <Image style = {{width: WIDTH, height: 140, resizeMode: 'contain', alignSelf: 'center'}} source={shoesItem.thumbnail} />
        </ScrollView>

        <View style = {styles.pageContainer}>
          <Text style = {styles.pageText}>{page}/</Text>
          <Text style = {styles.pageText}>4</Text>
        </View>
        

      </View>
      <ScrollView>
        <View style = {{height: 800}}>
          <View style = {styles.infoContainer}>
            <Animated.Text entering={FadeInLeft.delay(200).duration(500)} style = {styles.name}>{shoesItem.title}</Animated.Text>
            <Animated.Text entering={FadeInLeft.delay(300).duration(500)} style = {styles.price}>{shoesItem.price}.000đ</Animated.Text>
            <Animated.Text entering={FadeInLeft.delay(400).duration(500)} style = {styles.desc}>{shoesItem.description}</Animated.Text>
          </View>
        </View>
      </ScrollView>

      {isAddtoCart &&
      <Animated.View style = {[styles.backgroundGreyMini, reanimatedStyle]}>
        <Image style = {{width: 80, height: 50, resizeMode: 'contain'}} source={shoesItem.thumbnail} />
      </Animated.View>}

      <TouchableOpacity onPress={handleAddToCart} activeOpacity={0.8} style = {styles.button}>
        <Text style = {styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
  </View>
  )
}

const WIDTHMINI = Dimensions.get('window').width;
const HEIGHTMINI = Dimensions.get('window').height;

export default DetailProduct

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGrey: {
    height: 350,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#D3D3D3'

  },
  backgroundGreyMini: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: HEIGHTMINI / 2.5,
    right: WIDTHMINI / 2.8,
    borderRadius: 99,
    width: 100,
    height: 100,
    backgroundColor: '#D3D3D3', 
    position: 'absolute'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 16
  },
  pageContainer: {
    width: 50,
    height: 25,
    position: 'absolute',
    right: 25,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8
  },
  pageText: {
    fontWeight: '700'
  },
  infoContainer: {
    marginTop: 25,
    paddingHorizontal: 30,
  },
  name: {
    fontSize: 25,
    fontStyle: 'italic'
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  desc: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 300
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'black',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 500
  }
})