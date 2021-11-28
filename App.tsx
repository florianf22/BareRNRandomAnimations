import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
//
import Movie from './components/Movie';
import {width} from './constants';
import data from './data';
import {useSharedValue} from 'react-native-reanimated';
import Backdrop from './components/Backdrop';

const ITEM_WIDTH = width * 0.8;
const dataEdited = [null, ...data, null];

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const scrollX = useSharedValue(0);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <Backdrop scrollX={scrollX} />
        <ScrollView
          style={styles.scrollView}
          horizontal
          pagingEnabled={true}
          decelerationRate="fast"
          bounces={false}
          scrollEventThrottle={16}
          snapToInterval={ITEM_WIDTH}
          onScroll={({nativeEvent}) => {
            scrollX.value = nativeEvent.contentOffset.x;
          }}>
          {dataEdited.map((movie, i) => {
            if (!movie) {
              return <View key={i} style={{width: ITEM_WIDTH / 8}} />;
            }

            return <Movie key={i} movie={movie} scrollX={scrollX} index={i} />;
          })}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {},
});

export default App;
