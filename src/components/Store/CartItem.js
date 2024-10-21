import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'
import { ListItem } from '@rneui/base'
import DeleteButton from './DeleteButton'
import InfoButton from './InfoButton'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../redux/counterCartslice';
import cartSlice from '../../redux/cartSlice'

const CartItem = ({id, title, thumbnail, size, price, quantity}) => {
  const navigation =  useNavigation();
  const dispatch = useDispatch();

  function handleRemoveToCart() {
    dispatch(decrement());
    dispatch(cartSlice.actions.removeToCart({id: id}))
  }

  
  
  return (
    
    <ListItem.Swipeable
    rightContent={() => (
      <View style = {{flexDirection: 'row'}}>
        <InfoButton onPress={() => {navigation.goBack()}} />
        <DeleteButton onPress={handleRemoveToCart} />
      </View>
      
     )}
     rightWidth={150}
    >
      <ListItem.Content>
      <View style={styles.container}>
      <Image source={thumbnail} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.size}>Size {size}</Text>

        <View style={styles.footer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              name="add"
              size={24}
              color="gray"
            />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons
              name="remove-outline"
              size={22}
              color="gray"
            />
          </TouchableOpacity>
          <Text style={styles.itemTotal}>
            {price * quantity}.000đ
          </Text>
        </View>
      </View>
    </View>
      </ListItem.Content>
    </ListItem.Swipeable>
    
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      contentContainer: {
        flex: 1,
        marginLeft: 10,
      },
      image: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
      },
      name: {
        fontWeight: '500',
        fontSize: 18,
      },
      size: {
        fontSize: 16,
        color: 'gray',
      },
      quantity: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'gray',
      },
      footer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      itemTotal: {
        fontSize: 16,
        marginLeft: 'auto',
        fontWeight: '500',
      },
})