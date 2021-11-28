import * as React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

//
import HouseDetails from '../screens/HouseDetails';
import HouseList from '../screens/HouseList';
import {StackNavigatorParamList} from './types';

const Stack = createSharedElementStackNavigator<StackNavigatorParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
        presentation: 'transparentModal',
        headerShown: false,
      }}>
      <Stack.Screen
        name="List"
        component={HouseList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={HouseDetails}
        sharedElements={route => {
          const {id} = route.params;
          return [`item.${id}.photo`];
        }}
      />
    </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({});

export default StackNavigator;
