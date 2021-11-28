import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

interface HeadingProps {}

const Heading: React.FC<HeadingProps> = () => {
  return <Text style={styles.text}>300+ Places to Stay</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginLeft: '5%',
    fontSize: 24,
  },
});

export default Heading;
