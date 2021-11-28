import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import * as Icon from 'react-native-feather';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <View style={styles.container}>
      <Icon.ArrowLeft height={24} color="#000" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Anywhere</Text>
        <Text style={styles.textSymbol}>●</Text>
        <Text style={styles.text}>Stay</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    width: '90%',
    marginLeft: '5%',
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSymbol: {
    fontSize: 6,
    marginHorizontal: 5,
  },
});

export default SearchBar;
