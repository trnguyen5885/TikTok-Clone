import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ButtonComponent = ({children, styleCustoms}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={[styles.container, styleCustoms]}>
        <Text style={styles.content}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(236,236,236,0.8)',
  },
  content: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
