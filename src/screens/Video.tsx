import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  PhotoFile,
  TakePhotoOptions,
  useMicrophonePermission,
  VideoFile,
} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import VideoPlayer from 'react-native-video';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Video = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const {
    hasPermission: microphonePermission,
    requestPermission: requestMicrophonePermission,
  } = useMicrophonePermission();
  const device = useCameraDevice('back');
  const camera = useRef<Camera>(null);
  const isFocused = useIsFocused();
  const pressed = useSharedValue(0);
  const [isRecord, setIsRecord] = useState(false);
  const longPressTimeout = useRef<NodeJS.Timeout | null>(null);
  const [image, setImage] = useState<PhotoFile | null>();
  const [video, setVideo] = useState<VideoFile>();
  const [flash, setFlash] = useState<TakePhotoOptions['flash']>('off');

  const pressAnimated = useAnimatedStyle(() => {
    const scale = interpolate(pressed.value, [0, 1], [1, 0.6]);
    return {
      transform: [{scale}],
    };
  });

  const takePhoto = async () => {
    const photo = await camera.current?.takePhoto({
      flash: flash,
    });
    setImage(photo);
  };

  const startRecord = () => {
    if (!camera.current) {
      return;
    }
    camera.current?.startRecording({
      onRecordingFinished: video => {
        setVideo(video);
      },
      onRecordingError: error => {
        console.error(error);
      },
    });
  };

  const handlePressIn = async () => {
    pressed.value = withSpring(1);
    longPressTimeout.current = setTimeout(() => {
      setIsRecord(true);
      startRecord();
    }, 1000);
  };

  const handlePressOut = async () => {
    pressed.value = withSpring(0);
    if (longPressTimeout.current) {
      clearTimeout(longPressTimeout.current);
    }
    if (isRecord) {
      await camera.current?.stopRecording();
      setIsRecord(false);
    } else {
      await takePhoto();
    }
  };

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    } else if (!microphonePermission) {
      requestMicrophonePermission();
    }
  }, [hasPermission, microphonePermission]);

  if (!hasPermission || !microphonePermission) {
    return <ActivityIndicator />;
  }

  if (device == null) {
    return <Text>Device not conected camera</Text>;
  }

  return (
    <View style={{flex: 1}}>
      {video && (
        <>
          <VideoPlayer
            source={{uri: video.path}}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
            repeat
          />
        </>
      )}
      {image ? (
        <>
          <Image
            source={{uri: `file://${image.path}`}}
            style={StyleSheet.absoluteFill}
          />
          <Antdesign
            style={{position: 'absolute', top: 25, left: 24}}
            name="left"
            color="white"
            size={28}
            onPress={() => {
              setImage(null);
            }}
          />
        </>
      ) : (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isFocused && !image}
            photo
            video
            audio
          />
          <TouchableOpacity
            onPress={() => {
              setFlash(currentValue => (currentValue == 'off' ? 'on' : 'off'));
            }}
            activeOpacity={0.8}
            style={styles.flashContainer}>
            <Ionicons
              name={flash == 'on' ? 'flash' : 'flash-off'}
              size={30}
              color="white"
            />
          </TouchableOpacity>

          <View style={[styles.buttonContainer]}>
            <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
              <Animated.View
                style={[
                  styles.button,
                  pressAnimated,
                  isRecord
                    ? {backgroundColor: 'red'}
                    : {backgroundColor: 'white'},
                ]}></Animated.View>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default Video;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 40,
    left: width / 2.4,
    bottom: height / 12,
  },
  flashContainer: {
    position: 'absolute',
    top: 30,
    right: 20,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 8,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});
