import React from 'react';
import {Text, View} from 'react-native';
import { StyleSheet } from 'react-native';

const InterestedToon = () => {
  return (
    <View style={styles.content}>
      <Text style={{fontSize: 30}}>This is InterestedToon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
  },
});

export default InterestedToon;
