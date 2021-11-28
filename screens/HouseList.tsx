import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

//
import Heading from '../components/Heading';
import SearchBar from '../components/SearchBar';
import Property from '../components/Property';
import Tags from '../components/Tags';
import data from '../data';
import {StackNavigatorParamList} from '../navigators/types';

type NavProps = NativeStackScreenProps<StackNavigatorParamList, 'List'>;

interface HouseListProps {}

const HouseList: React.FC<HouseListProps & NavProps> = ({navigation}) => {
  const navigateToDetails = (id: string): void => {
    navigation.navigate('Details', {id});
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.innerContainer}>
        <SearchBar />
        <Tags />
        <Heading />
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map(house => (
            <Pressable
              key={house.id}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? '#fff' : '#eee',
                },
              ]}
              onPress={() => navigateToDetails(house.id)}>
              <Property house={house} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  innerContainer: {
    flex: 1,
    paddingVertical: 30,
  },
});

export default HouseList;
