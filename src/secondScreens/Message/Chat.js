import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {USERS} from '../../data/dummy-data';
import EmojiSelector from 'react-native-emoji-selector';
import {getData} from '../../utils/http';
import {Skeleton} from '@rneui/themed';

const Chat = ({navigation, route}) => {
  const id = route.params.id;
  const [message, setMessage] = useState('');
  const [messageData, setMessageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const flatList = useRef(null);

  const fetchMessageData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getData('conversitions');
      setMessageData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const user = USERS.find(user => user.id === id);
    navigation.setOptions({
      title: user.name,
    });

    fetchMessageData();
  }, []);

  function handleShowEmojiPicker() {
    if (showEmojiPicker === false) {
      setShowEmojiPicker(true);
      Keyboard.dismiss();
    } else {
      setShowEmojiPicker(false);
    }
  }

  function toggleShowEmojiPicker() {
    setShowEmojiPicker(false);
  }

  function handleEmojiSelected(emoji) {
    setMessage(prevMess => prevMess + emoji);
  }

  function BubbleMessage({author, message}) {
    return (
      <View
        style={{
          maxWidth: '80%',
          borderRadius: 15,
          overflow: 'hidden',
          marginVertical: 5,
          alignSelf: author === 'user' ? 'flex-end' : 'flex-start',
        }}>
        {isLoading && (
          <Skeleton
            animation="wave"
            width={200}
            height={35}
            style={{borderRadius: 10}}
          />
        )}

        {!isLoading && (
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              padding: 10,
              color: author === 'user' ? 'white' : 'black',
              backgroundColor: author === 'user' ? '#017bfd' : '#ffffff',
            }}>
            {message}
          </Text>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          initialNumToRender={80}
          data={messageData}
          keyExtractor={item => item.message.toString()}
          ref={flatList}
          onContentSizeChange={() => {
            flatList.current.scrollToEnd();
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: showEmojiPicker === true ? 20 : 60,
          }}
          renderItem={({item}) => <BubbleMessage {...item} />}
          automaticallyAdjustKeyboardInsets
        />
      </View>
      <KeyboardAvoidingView
        style={{paddingVertical: 20}}
        keyboardVerticalOffset={90}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
        <View style={styles.inputContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <TextInput
              style={styles.input}
              multiline={true}
              value={message}
              onChangeText={setMessage}
              onFocus={toggleShowEmojiPicker}
              placeholder="Type a message..."
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleShowEmojiPicker}>
            <Feather name="meh" color="black" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="send" color="black" size={24} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      {showEmojiPicker && (
        <View style={{height: 350, paddingTop: 10}}>
          <EmojiSelector
            onEmojiSelected={handleEmojiSelected}
            showSectionTitles={false}
            showSearchBar={false}
            columns={8}
            size={24}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: -15,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
  },
  input: {
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  iconButton: {
    marginHorizontal: 5,
  },
});

export default Chat;
