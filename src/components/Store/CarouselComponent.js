import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const CarouselComponent = ({width, height, data, isVertical, isVoucher}) => {
  function renderItem({item}) {
    return (
      <View style={styles.carouselSlide}>
        <Image
          style={{width: '100%', height: 90, resizeMode: 'contain'}}
          source={item.thumbnail}
        />
      </View>
    );
  }

  function renderItemVoucher({item}) {
    return (
      <View style={styles.carouselSlideVoucher}>
        <Text style={styles.flashSalesVoucherText}>{item.voucher}</Text>
      </View>
    );
  }

  return (
    <>
      <View width={width} height={height}>
        <Carousel
          loop
          width={width}
          autoPlay={true}
          height={!isVoucher ? 180 : 50}
          data={data}
          vertical={isVertical}
          scrollAnimationDuration={2000}
          renderItem={!isVoucher ? renderItem : renderItemVoucher}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  carouselSlide: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 35,
    marginRight: 25,
  },
  carouselSlideVoucher: {
    backgroundColor: 'rgba(255,0,0,0.75)',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  flashSalesVoucherText: {
    marginLeft: 10,
    fontWeight: '800',
    color: 'white',
  },
});

export default CarouselComponent;
