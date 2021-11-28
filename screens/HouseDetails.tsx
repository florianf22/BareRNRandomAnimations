import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import * as Icon from 'react-native-feather';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SharedElement} from 'react-navigation-shared-element';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
//
import data, {Property as PropertyType} from '../data';
import {StackNavigatorParamList} from '../navigators/types';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

type NavProps = NativeStackScreenProps<StackNavigatorParamList, 'Details'>;

interface HouseDetailsProps {}

const HouseDetails: React.FC<HouseDetailsProps & NavProps> = ({
  route,
  navigation,
}) => {
  const {id} = route.params;
  const house = data.find((item: PropertyType) => item.id === id);
  const panX = useSharedValue(0);
  const panY = useSharedValue(0);

  const navigateToList = (value: number): void => {
    if (-value < -height / 2) {
      navigation.push('List');
    }
  };

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: () => {},
    onActive: (event, ctx) => {
      panX.value = event.translationX;
      panY.value = event.translationY;
    },
    onEnd: (event, ctx) => {
      runOnJS(navigateToList)(panY.value);

      panX.value = withTiming(0);
      panY.value = withTiming(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(panY.value, [-height, 0, height], [1, 1, 0.7]);

    return {
      transform: [{translateX: panX.value}, {translateY: panY.value}, {scale}],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={panGesture}>
      <Animated.View style={[styles.container, rStyle]}>
        <SharedElement id={`item.${id}.photo`}>
          <Image source={{uri: house!.uri}} style={styles.image} />
        </SharedElement>

        <View style={styles.innerContainer}>
          <View style={styles.details}>
            <View style={styles.type}>
              <Text style={styles.typeText}>{house!.type}</Text>
            </View>

            <View style={styles.rating}>
              <Icon.Star
                height={20}
                style={styles.ratingIcon}
                fill="#ffd700"
                stroke="#ffd700"
              />
              <Text style={styles.ratingText}>{`${house!.rating} (${
                house!.reviews
              })`}</Text>
            </View>
          </View>

          <Text style={styles.heading}>{house!.title}</Text>

          <Text style={[styles.heading, {marginTop: 2}]}>
            {house!.description}
          </Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  innerContainer: {
    padding: 20,
  },
  type: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  typeText: {
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingIcon: {
    marginRight: 5,
  },
  ratingText: {
    fontWeight: 'bold',
  },
  heading: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HouseDetails;
