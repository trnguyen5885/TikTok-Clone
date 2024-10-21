import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Animated,
  Pressable,
} from 'react-native';
import React from 'react';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Header = ({animationValue}) => {
  const textInputAnimation = {
    transform: [
      {
        scaleX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 50],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animationValue.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const featureDocumentAnimation = {
    transform: [
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -58],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const featureDeliveryAnimation = {
    transform: [
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -20],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -60],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const featureLocationAnimation = {
    transform: [
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -60],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -60],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const featurePaymentAnimation = {
    transform: [
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -110],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -62],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const featureIconCircleAnimation = {
    opacity: animationValue.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const featureIconAnimation = {
    opacity: animationValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  const featureNameAnimation = {
    transform: [
      {
        scaleX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animationValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholer}></View>
      </SafeAreaView>
      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../assets/images/search.png')}
              style={styles.searchIcon}
            />
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              style={[styles.searchInput, textInputAnimation]}
            />
          </View>
          <Pressable>
            <Image
              source={require('../../assets/images/cart.png')}
              style={styles.cart}
            />
          </Pressable>
        </View>
        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, featureDocumentAnimation]}>
            <Animated.Image
              source={require('../../assets/images/document.png')}
              style={[styles.featureIconCicle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/document.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              ĐƠN HÀNG
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, featureDeliveryAnimation]}>
            <Animated.Image
              source={require('../../assets/images/delivery.png')}
              style={[styles.featureIconCicle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/delivery.png')}
              style={[
                styles.featureIcon,
                styles.featureDelivery,
                featureIconAnimation,
              ]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              FREESHIP
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, featureLocationAnimation]}>
            <Animated.Image
              source={require('../../assets/images/location.png')}
              style={[styles.featureIconCicle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/location.png')}
              style={[
                styles.featureIcon,
                styles.featureLocation,
                featureIconAnimation,
              ]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              ĐỊA CHỈ
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, featurePaymentAnimation]}>
            <Animated.Image
              source={require('../../assets/images/payment.png')}
              style={[styles.featureIconCicle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../assets/images/payment.png')}
              style={[
                styles.featureIcon,
                styles.featurePayment,
                featureIconAnimation,
              ]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>
              THANH TOÁN
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    </>
  );
};

const UPPER_HEADER_HEIGHT = 40;
const LOWER_HEADER_HEIGHT = 96;

const styles = StyleSheet.create({
  upperHeaderPlaceholer: {
    height: UPPER_HEADER_HEIGHT,
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(236,236,236,0.8)',
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flex: 0.95,
    justifyContent: 'center',
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginLeft: 5,
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    borderWidth: 3,
    borderRadius: 8,
    borderColor: '#ffffff',

    paddingVertical: 8,
    paddingLeft: 32,
  },
  lowerHeader: {
    width: '100%',
    height: LOWER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  feature: {
    alignItems: 'center',
  },
  featureIconCicle: {
    width: 35,
    height: 35,
  },
  featureIcon: {
    position: 'absolute',
    width: 22,
    height: 22,
    top: 9,
  },
  featureDelivery: {
    width: 28,
    height: 28,
  },
  featureLocation: {
    width: 26,
    height: 26,
  },
  featurePayment: {
    width: 28,
    height: 28,
  },

  featureName: {
    fontSize: 12,
    marginTop: 12,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 14,
  },
  cart: {
    width: 35,
    height: 35,
    marginLeft: 8,
  },
});

export default Header;
