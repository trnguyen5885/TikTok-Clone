import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React, {useRef, useState} from 'react';

const TabView = ({tabs}) => {
  const [tabIndex, setTabIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const handleTabPress = index => {
    setTabIndex(index);
    scrollViewRef.current.scrollTo({x: index * width, animated: true});
  };

  const handleScroll = event => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);

    if (index != tabIndex) {
      setTabIndex(index);
    }
  };

  return (
    <>
      <View style={styles.tabBarContainer}>
        {tabs.map((tab, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => handleTabPress(index)}>
              <Ionicons
                name={tab.icon}
                size={24}
                color={tabIndex === index ? 'black' : 'rgba(0,0,0,0.5)'}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        onMomentumScrollEnd={handleScroll}>
        {tabs.map((tab, index) => (
          <View key={index} style={styles.tabContentContainer}>
            <Text style={{color: 'black'}}>{tab.content}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  tabContentContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabView;
