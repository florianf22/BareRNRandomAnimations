import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import * as Icon from 'react-native-feather';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
//
import {width, height} from '../constants';

const IMAGE_HEIGHT = height * 0.5;
const IMAGE_WIDTH = width * 0.72;
const ITEM_WIDTH = width * 0.8;
const SPACING = 10;

interface MovieProps {
  movie: {
    id: string;
    uri: string;
    title: string;
    description: string;
    rating: string;
    year: string;
  };
  scrollX: SharedValue<number>;
  index: number;
}

const Movie: React.FC<MovieProps> = ({movie, scrollX, index}) => {
  const rStyled = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollX.value,
      [(index - 2) * IMAGE_WIDTH, (index - 1) * ITEM_WIDTH, index * ITEM_WIDTH],
      [100, 0, 100],
    );

    return {
      transform: [{translateY}],
    };
  });

  return (
    <Animated.View style={[styles.container, rStyled]}>
      <Image source={{uri: movie.uri}} style={styles.image} />

      <Text style={styles.title}>{movie.title}</Text>

      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{movie.rating}</Text>
        <View style={styles.starsContainer}>
          {Array.from({length: 10}, (_, i) => (
            <Icon.Star
              key={i}
              height={20}
              fill={Math.floor(+movie.rating) >= i + 1 ? '#ffd700' : '#fff'}
              color="#ffd700"
              style={styles.starIcon}
            />
          ))}
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {movie.description}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING * 3,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginTop: SPACING,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: SPACING,
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: SPACING,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    marginLeft: -SPACING * 0.3,
  },
  description: {
    marginTop: SPACING,
    lineHeight: 20,
    // flex: 1,
  },
});

export default Movie;
