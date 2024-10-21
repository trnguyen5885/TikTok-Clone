/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Store from './src/screens/Store';
import Message from './src/screens/Message';
import Profile from './src/screens/Profile';
import Video from './src/screens/Video';
import DetailProduct from './src/secondScreens/Store/DetailProduct';
import Cart from './src/secondScreens/Store/Cart';
import BackIcon from './src/assets/SVG/BackIcon';
import store from './src/redux/store';
import Chat from './src/secondScreens/Message/Chat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const [backgroundTab, setBackgroundTab] = useState('black');
  const [tintColorLabelTab, setTintColorLabelTab] = useState('white');

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: backgroundTab},
        tabBarActiveTintColor: tintColorLabelTab,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconActive,
              ]}
              source={require('./src/assets/images/home.png')}
            />
          ),
        }}
        listeners={{
          tabPress: () => {
            setBackgroundTab('black');
            setTintColorLabelTab('white');
          },
        }}
      />

      <Tab.Screen
        name="Shopping"
        component={Store}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.bottomTabIcon,
                focused && {tintColor: tintColorLabelTab},
              ]}
              source={require('./src/assets/images/store.png')}
            />
          ),
        }}
        listeners={{
          tabPress: () => {
            setBackgroundTab('white');
            setTintColorLabelTab('black');
          },
        }}
      />

      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarStyle: {display: 'none'},
          tabBarIcon: () => (
            <Image
              style={[styles.newVideoButton]}
              source={require('./src/assets/images/new-video.png')}
            />
          ),
          tabBarLabel: () => null,
        }}
      />

      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.bottomTabIcon,
                focused && {tintColor: tintColorLabelTab},
              ]}
              source={require('./src/assets/images/chat.png')}
            />
          ),
        }}
        listeners={{
          tabPress: () => {
            setBackgroundTab('white');
            setTintColorLabelTab('black');
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTitle: 'Trung Nguyên',
          headerStyle: {height: 105},
          headerTitleStyle: {fontSize: 19, fontWeight: 700, color: 'black'},
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Ionicons name="chatbox-ellipses-outline" size={26} />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <Ionicons name="menu" size={26} />
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              style={[
                styles.bottomTabIcon,
                focused && {tintColor: tintColorLabelTab},
              ]}
              source={require('./src/assets/images/user.png')}
            />
          ),
        }}
        listeners={{
          tabPress: () => {
            setBackgroundTab('white');
            setTintColorLabelTab('black');
          },
        }}
      />
    </Tab.Navigator>
  );
}

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
      <BackIcon />
    </TouchableOpacity>
  );
};

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="OverviewTab" component={TabNavigator} />
          <Stack.Screen name="Detail" component={DetailProduct} />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: true,
              headerTitle: 'Giỏ hàng',
              headerBackTitleVisible: false,
              headerBackVisible: false,
              headerLeft: () => <BackButton />,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              headerShown: true,
              headerBackVisible: false,
              headerBackTitleVisible: false,
              headerLeft: () => <BackButton />,
              headerRight: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10,
                  }}>
                  <Feather name="flag" color="black" size={25} />
                  <Entypo
                    name="dots-three-horizontal"
                    color="black"
                    size={20}
                  />
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconActive: {
    tintColor: 'white',
  },
  newVideoButton: {
    width: 54,
    height: 27,
  },
});

export default App;
