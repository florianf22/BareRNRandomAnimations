import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const tags = ['Dates', 'Guests', 'Filters'] as const;

interface TagsProps {}

const Tags: React.FC<TagsProps> = () => {
  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <View
          key={index}
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.tagContainer, {marginLeft: index !== 0 ? 7 : 0}]}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  tagContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  tagText: {},
});

export default Tags;
