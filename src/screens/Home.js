import { FlatList } from 'react-native'
import React, { useState } from 'react'
import { VIDEOS } from '../data/dummy-data'
import VideoItem from '../components/Video/VideoItem'
import { windowHeight } from '../assets/utils/getMusicNoteAnimation';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

function Home() {
  
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <FlatList 
    data={VIDEOS} 
    pagingEnabled
    renderItem={({item, index}) => <VideoItem data={item} isActive={activeVideoIndex === index} />}
    keyExtractor={(item) => item.id.toString()}
    onScroll={(e) => {
      const index = Math.round(e.nativeEvent.contentOffset.y / (windowHeight - bottomTabHeight));
      setActiveVideoIndex(index)
    }}
    />
  )
    
}

export default Home