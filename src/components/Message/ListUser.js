import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Antdesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ListUser = ({dataUser, isSuggest}) => {
  const navigation = useNavigation();

  function renderUser({item}) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Chat', {
            id: item.id,
          });
        }}>
        <View style={styles.userItem}>
          <Image style={styles.userAvatar} source={{uri: item.avatar}} />
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text numberOfLines={1} style={styles.userChat}>
                {item.chat}
              </Text>
            </View>
            <Antdesign name="right" color="#808080" size={18} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function renderUserSuggest({item}) {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.userItem}>
          <Image style={styles.userAvatar} source={{uri: item.avatar}} />
          <View style={styles.userInfo}>
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={[styles.userChat, styles.userChatCustom]}>
                {item.chat.lastMessage}
              </Text>
            </View>
            <View style={styles.followContainer}>
              <Text style={styles.follow}>Follow</Text>
            </View>
            <Antdesign name="close" color="#808080" size={18} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <FlatList
        data={dataUser}
        keyExtractor={item => item.id}
        renderItem={!isSuggest ? renderUser : renderUserSuggest}
        scrollEnabled={false}
      />
    </>
  );
};

export default ListUser;

const styles = StyleSheet.create({
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    columnGap: 12,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  userName: {
    fontSize: 16,
  },
  userChat: {
    marginTop: 5,
    fontSize: 14,
    color: '#A9A9A9',
    maxWidth: 200,
  },
  userChatCustom: {
    maxWidth: 180,
  },
  followContainer: {
    backgroundColor: '#FF3232',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  follow: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600',
  },
});
