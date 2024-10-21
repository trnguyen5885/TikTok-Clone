import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import {PRODUCTS, SALES, VOUCHERS} from '../../data/dummy-data';
import PagerView from 'react-native-pager-view';
import ProductCard from '../../components/Store/ProductItem';
import Header from '../../components/Store/Header';
import CarouselComponent from '../../components/Store/CarouselComponent';
import ListFlashSale from '../../components/Store/ListFlashSale';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const Home = () => {
  const width = Dimensions.get('window').width;
  const animationValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const renderItemProduct = ({item}) => <ProductCard {...item} />;

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header animationValue={animationValue} />
      <ScrollView
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animationValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          scrollViewRef.current?.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0,
            animated: true,
          });
        }}
        scrollEventThrottle={16}>
        <View style={styles.paddingForHeader}></View>
        <View style={styles.scrollViewContent}>
          <CarouselComponent
            width={width}
            height={160}
            data={SALES}
            isVertical={false}
            isVoucher={false}
          />

          <View style={styles.flashSalesContainer}>
            <View style={styles.flashSalesHeader}>
              <Text style={styles.flashSaleTitle}>F⚡️ash Sale</Text>
              <CarouselComponent
                width={250}
                height={20}
                data={VOUCHERS}
                isVertical={true}
                isVoucher={true}
              />
            </View>

            <View style={styles.flashSalesBody}>
              <ListFlashSale data={SALES} />
            </View>
          </View>

          <View style={styles.listProducts}>
            <PagerView pageMargin={10} style={styles.pagerView} initialPage={0}>
              <View key={1}>
                <FlatList
                  data={PRODUCTS}
                  renderItem={renderItemProduct}
                  contentContainerStyle={{alignItems: 'center'}}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </View>
              <View key={2}>
                <FlatList
                  data={PRODUCTS}
                  renderItem={renderItemProduct}
                  contentContainerStyle={{alignItems: 'center'}}
                  numColumns={2}
                  keyExtractor={item => item.id}
                  scrollEnabled={false}
                />
              </View>
            </PagerView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const LOWER_HEADER_HEIGHT = 96;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  scrollViewContent: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    backgroundColor: 'rgba(236,236,236,0.8)',
  },
  flashSalesContainer: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  flashSalesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flashSaleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  flashSalesBody: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 15,
  },
  listProducts: {
    flex: 1,
    height: WINDOW_HEIGHT * 1.1,
    marginTop: 15,
  },
  pagerView: {
    flex: 1,
  },
});

export default Home;
