import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import CartItem from '../../components/Store/CartItem';
import {PRODUCTS, SALES} from '../../data/dummy-data';
import {useSelector} from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acumentlator, currentValue) => {
    return acumentlator + currentValue.price;
  }, 0);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <FlatList
            data={cartItems}
            scrollEnabled={false}
            renderItem={({item}) => <CartItem {...item} />}
            keyExtractor={item => item.id}
            ListFooterComponent={() => (
              <View style={styles.totalsContainer}>
                <View style={styles.row}>
                  <Text style={styles.text}>Total</Text>
                  <Text style={styles.text}>{totalPrice}.000đ</Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
  },
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'gainsboro',
  },
  row: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
});
