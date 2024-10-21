import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  Animated,
} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';

const Header = ({animationValue}) => {
  const storyNameAnimation = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 30],
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

  const storyItemFirstAnimation = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0.6],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -115],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 150],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const storyItemSecondAnimation = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0.6],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -115],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 50],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const storyItemThirdAnimation = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0.6],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -115],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -60],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const storyItemFourAnimation = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0.6],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -115],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animationValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -170],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceHolder}></View>
      </SafeAreaView>
      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.actionsContainer}>
            <TouchableOpacity>
              <Antdesign name="addusergroup" size={30} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Antdesign name="search1" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerHeader}>
          <View style={styles.storyContainer}>
            <Animated.View style={[styles.storyItem, storyItemFirstAnimation]}>
              <Image
                style={styles.storyAvatar}
                source={{
                  uri: 'https://images.unsplash.com/photo-1727713274972-d1d138ea0569?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Animated.Text style={[styles.storyName, storyNameAnimation]}>
                genmnmnn1
              </Animated.Text>
            </Animated.View>
            <Animated.View style={[styles.storyItem, storyItemSecondAnimation]}>
              <Image
                style={styles.storyAvatar}
                source={{
                  uri: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Animated.Text style={[styles.storyName, storyNameAnimation]}>
                kimnmnmn
              </Animated.Text>
            </Animated.View>
            <Animated.View style={[styles.storyItem, storyItemThirdAnimation]}>
              <Image
                style={styles.storyAvatar}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Animated.Text style={[styles.storyName, storyNameAnimation]}>
                LifeOS notion
              </Animated.Text>
            </Animated.View>
            <Animated.View style={[styles.storyItem, storyItemFourAnimation]}>
              <Image
                style={styles.storyAvatar}
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Animated.Text style={[styles.storyName, storyNameAnimation]}>
                nguyenmnmn2
              </Animated.Text>
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  upperHeaderPlaceHolder: {
    height: 40,
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
  },
  upperHeader: {
    height: 40,
    paddingHorizontal: 15,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lowerHeader: {
    height: 120,
  },
  storyContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 15,
  },
  storyItem: {
    minWidth: 80,
    alignItems: 'center',
  },
  storyAvatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  storyName: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },

  paddingForHeader: {
    height: 100,
  },
});

export default Header;
