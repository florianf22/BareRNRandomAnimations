import * as React from 'react';
import {StyleSheet, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import Svg, {Rect} from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  interpolate,
  SharedValue,
} from 'react-native-reanimated';
//
import data from '../data';
import {width, height} from '../constants';

const BACKDROP_HEIGHT = height * 0.5;
const ITEM_WIDTH = width * 0.8;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

interface BackdropProps {
  scrollX: SharedValue<number>;
}

const Backdrop: React.FC<BackdropProps> = ({scrollX}) => {
  const useRStyle = (index: number) =>
    useAnimatedStyle(() => {
      const translateX = interpolate(
        scrollX.value,
        [
          (index - 2) * ITEM_WIDTH,
          (index - 1) * ITEM_WIDTH,
          index * ITEM_WIDTH,
        ],
        [-width, 0, width],
      );

      return {
        transform: [{translateX}],
      };
    });

  return (
    <>
      <ScrollView style={styles.scrollView}>
        {data.map((item, index) => {
          return (
            <MaskedView
              style={styles.posAbsolute}
              key={index}
              maskElement={
                <AnimatedSvg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                  style={useRStyle(index + 1)}>
                  <Rect x={0} y={0} height={height} width={width} fill="red" />
                </AnimatedSvg>
              }>
              <Image source={{uri: item.uri}} style={StyleSheet.absoluteFill} />
            </MaskedView>
          );
        })}
      </ScrollView>
      <LinearGradient
        colors={['transparent', '#fff']}
        style={styles.posAbsolute}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    // backgroundColor: 'yellow',
  },
  posAbsolute: {
    width,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Backdrop;
