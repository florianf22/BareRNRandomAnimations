import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The first app with bare react native project that also runs on android
        emulator
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default App;
