import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../components/Profile/ButtonComponent';
import TabView from '../components/Profile/TabView';

const {height} = Dimensions.get('screen');
const tabs = [
  {
    icon: 'grid-outline',
    content: 'Nội dung 1',
  },
  {
    icon: 'lock-closed-outline',
    content: 'Nội dung 2',
  },
  {
    icon: 'logo-electron',
    content: 'Nội dung 3',
  },
  {
    icon: 'bookmark-outline',
    content: 'Nội dung 4',
  },
  {
    icon: 'heart-outline',
    content: 'Nội dung 5',
  },
];

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.scrollViewContent}>
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Image
              style={styles.profileAvatar}
              source={require('../assets/images/avatar-01.png')}
              resizeMode="cover"
            />
            <Text style={styles.profileName}>@trung.nguyn9666</Text>
          </View>
          <View style={styles.profileFollowContainer}>
            <View style={styles.profileFollowItem}>
              <Text style={styles.followQuanlity}>31</Text>
              <Text style={styles.followText}>Đã follow</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.profileFollowItem}>
              <Text style={styles.followQuanlity}>1</Text>
              <Text style={styles.followText}>Follower</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.profileFollowItem}>
              <Text style={styles.followQuanlity}>0</Text>
              <Text style={styles.followText}>Thích</Text>
            </View>
          </View>
          <View style={styles.profileActionContainer}>
            <ButtonComponent>Sửa hồ sơ</ButtonComponent>
            <ButtonComponent>Chia sẻ hồ sơ</ButtonComponent>
            <ButtonComponent
              styleCustoms={{
                paddingVertical: 10.5,
                paddingHorizontal: 12,
              }}>
              <Ionicons name="person-add" size={22} color="black" />
            </ButtonComponent>
          </View>
        </View>
        <View style={styles.tabViewContainer}>
          <TabView tabs={tabs} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollViewContent: {
    height: height,
    backgroundColor: 'white',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 15,
  },
  profileAvatar: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  profileFollowContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 15,
    alignItems: 'center',
  },
  profileFollowItem: {
    padding: 10,
  },
  line: {
    height: 20,
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  followQuanlity: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  followText: {
    marginTop: 5,
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '200',
  },
  profileActionContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 8,
  },
  tabViewContainer: {
    flex: 1,
    marginTop: 30,
  },
});
