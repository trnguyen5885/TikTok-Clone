import {
  Animated,
  Easing,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  getMusicNoteAnimation,
  windowHeight,
  windowWidth,
} from '../../assets/utils/getMusicNoteAnimation';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import Video from 'react-native-video';
import {COMMENTS} from '../../data/dummy-data';

function VideoItem({data, isActive}) {
  // Animation For UI

  const {channelName, uri, caption, musicName, likes, comments, avatarUri} =
    data;
  const [isHearted, setIsHearted] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [like, setLike] = useState(likes);
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const noteAnimatedValue1 = useRef(new Animated.Value(0)).current;
  const noteAnimatedValue2 = useRef(new Animated.Value(0)).current;
  const discAnimationLoopRef = useRef();
  const noteAnimationLoopRef = useRef();
  const heartAnimatedValue = useRef(new Animated.Value(0)).current;
  const isAnimating = useRef(false);
  const lastTap = useRef(0);
  const bottomSheetRef = useRef(null);

  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  const musicNoteAnimation1 = getMusicNoteAnimation(noteAnimatedValue1, false);

  const musicNoteAnimation2 = getMusicNoteAnimation(noteAnimatedValue2, true);

  const triggerAnimation = useCallback(() => {
    discAnimationLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );

    discAnimationLoopRef.current.start();

    noteAnimationLoopRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(noteAnimatedValue1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(noteAnimatedValue2, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    );

    noteAnimationLoopRef.current.start();
  });

  useEffect(() => {
    if (isActive) {
      triggerAnimation();
    } else {
      discAnimationLoopRef.current?.stop();
      noteAnimationLoopRef.current?.stop();
      discAnimatedValue.setValue(0);
      noteAnimatedValue1.setValue(0);
      noteAnimatedValue2.setValue(0);
    }
  }, [
    isActive,
    triggerAnimation,
    discAnimatedValue,
    noteAnimatedValue1,
    noteAnimatedValue2,
  ]);

  useEffect(() => {
    if (isHearted) {
      Animated.timing(heartAnimatedValue, {
        toValue: isHearted ? 1 : 0,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        isAnimating.current = false;
      });
    } else {
      heartAnimatedValue.setValue(0);
      isAnimating.current = false;
    }
  }, [heartAnimatedValue, isHearted]);

  const heartAnimation = {
    transform: [
      {
        scale: heartAnimatedValue.interpolate({
          inputRange: [0, 0.1, 0.8, 1],
          outputRange: [1, 0.5, 0.5, 0.5],
        }),
      },
    ],
    opacity: heartAnimatedValue.interpolate({
      inputRange: [0, 0.1, 0.8, 1],
      outputRange: [1, 0.8, 0.5, 0],
    }),
  };

  const bottomTabHeight = useBottomTabBarHeight();

  // Components UI

  return (
    <Pressable
      onPress={() => {
        const now = Date.now();
        const DELAY = 300;

        if (lastTap.current && now - lastTap.current < DELAY) {
          if (!isAnimating.current) {
            setIsHearted(!isHearted);
            isAnimating.current = true;
            if (!isHearted) {
              setLike(like + 1);
            } else {
              setLike(like - 1);
            }
          }
        } else {
          lastTap.current = now;
        }
      }}>
      <View
        style={[styles.container, {height: windowHeight - bottomTabHeight}]}>
        <Video
          source={{uri}}
          style={styles.video}
          resizeMode="cover"
          paused={!isActive}
          repeat
        />

        <View style={styles.bottomSection}>
          <View style={styles.bottomSectionLeft}>
            <Text style={styles.channelName}>{channelName}</Text>
            <Text style={styles.caption}>{caption}</Text>
            <View style={styles.musicNameContainer}>
              <Image
                style={styles.musicIcon}
                source={require('../../assets/images/music-note.png')}
              />
              <Text style={styles.musicName}>{musicName}</Text>
            </View>
          </View>
          <View style={styles.bottomSectionRight}>
            <Animated.Image
              style={[styles.musicNote, musicNoteAnimation1]}
              source={require('../../assets/images/floating-music-note.png')}
            />
            <Animated.Image
              style={[styles.musicNote, musicNoteAnimation2]}
              source={require('../../assets/images/floating-music-note.png')}
            />

            <Animated.Image
              style={[styles.musicDisc, discAnimation]}
              source={require('../../assets/images/disc.png')}
            />
          </View>

          <View style={styles.verticalBar}>
            <View style={[styles.verticalBarItem, styles.avatarContainer]}>
              <Image
                style={[styles.verticalBarIcon, styles.avatar]}
                source={{uri: avatarUri}}
              />
              <View style={styles.followButton}>
                <Image
                  style={styles.followIcon}
                  source={require('../../assets/images/plus-button.png')}
                />
              </View>
            </View>
            <View style={styles.verticalBarItem}>
              <Image
                style={styles.verticalBarIcon}
                source={
                  !isHearted
                    ? require('../../assets/images/heart.png')
                    : require('../../assets/images/heart-active.png')
                }
              />
              <Text style={styles.verticalBarText}>{like}</Text>
            </View>

            <View style={styles.verticalBarItem}>
              <TouchableOpacity
                onPress={() => {
                  setIsCommented(!isCommented);
                }}>
                <Image
                  style={styles.verticalBarIcon}
                  source={require('../../assets/images/message-circle.png')}
                />
              </TouchableOpacity>
              <Text style={styles.verticalBarText}>{comments}</Text>
            </View>

            <View style={styles.verticalBarItem}>
              <Image
                style={styles.verticalBarIcon}
                source={require('../../assets/images/reply.png')}
              />
              <Text style={styles.verticalBarText}>Share</Text>
            </View>
          </View>
        </View>

        {isHearted && (
          <View style={styles.heartContainer}>
            <Animated.Image
              style={[styles.heartIcon, heartAnimation]}
              source={require('../../assets/images/heart-active.png')}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
}

export default VideoItem;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 15,
    paddingHorizontal: 12,
  },
  bottomSectionLeft: {
    flex: 4,
  },
  channelName: {
    fontWeight: 'bold',
    color: 'white',
  },
  caption: {
    color: 'white',
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicIcon: {
    width: 14,
    height: 14,
    marginRight: 8,
  },
  musicName: {
    color: 'white',
  },
  bottomSectionRight: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: 'absolute',
    right: 12,
    bottom: 75,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: 'center',
  },
  verticalBarIcon: {
    width: 40,
    height: 40,
  },
  verticalBarText: {
    color: 'white',
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 40,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: 'white',
  },
  followButton: {
    position: 'absolute',
    bottom: -10,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  musicNote: {
    position: 'absolute',
    right: 45,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: 'white',
  },
  heartContainer: {
    position: 'absolute',
    left: '35%',
    top: '50%',
  },
  heartIcon: {
    width: 150,
    height: 150,
  },
  commentContainer: {
    maxWidth: 350,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  info: {
    marginLeft: 10,
    rowGap: 5,
    width: 300,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    fontStyle: 'italic',
    color: 'grey',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  icon: {
    width: 18,
    height: 18,
  },
});
