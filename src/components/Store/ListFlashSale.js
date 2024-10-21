import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ListFlashSale = ({data}) => {
  return data.map((sale, index) => (
    <View key={index} style={styles.flashSaleItem}>
      <Image style={styles.flashSaleImage} source={sale.thumbnail} />
      <Text style={styles.flashSalePrice}> {sale.price}.000đ</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  flashSaleImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  flashSalePrice: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ListFlashSale;
