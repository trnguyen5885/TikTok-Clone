import {useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import {USERS, USERSSUG} from '../data/dummy-data';
import Header from '../components/Message/Header';
import ListUser from '../components/Message/ListUser';

const Message = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Header animationValue={animationValue} />
      <ScrollView
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animationValue.setValue(offsetY);
        }}
        scrollEventThrottle={16}>
        <View style={styles.paddingForHeader}></View>
        <View style={styles.scrollViewContent}>
          <View>
            <ListUser dataUser={USERS} isSuggest={false} />
          </View>

          <View>
            <Text style={styles.section}>Tài khoản được đề xuất</Text>
            <ListUser dataUser={USERSSUG} isSuggest={true} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  paddingForHeader: {
    height: 100,
  },
  scrollViewContent: {
    height: HEIGHT * 1.45,
    backgroundColor: 'white',
  },
  section: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Message;
