import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import * as Icon from 'react-native-feather';
import {SharedElement} from 'react-navigation-shared-element';
//
import {Property as PropertyType} from '../data';

interface PropertyProps {
  house: PropertyType;
}

const Property: React.FC<PropertyProps> = ({house}) => {
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${house.id}.photo`}>
        <Image source={{uri: house.uri}} style={styles.image} />
      </SharedElement>

      <View style={styles.details}>
        <View style={styles.type}>
          <Text style={styles.typeText}>{house.type}</Text>
        </View>

        <View style={styles.rating}>
          <Icon.Star
            height={20}
            style={styles.ratingIcon}
            fill="#ffd700"
            stroke="#ffd700"
          />
          <Text
            style={
              styles.ratingText
            }>{`${house.rating} (${house.reviews})`}</Text>
        </View>
      </View>

      <Text style={styles.heading}>{house.title}</Text>

      <Text style={[styles.heading, {marginTop: 2}]}>{house.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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

export default Property;
