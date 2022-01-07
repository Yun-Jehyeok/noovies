import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function Movie({ navigation: { navigate } }) {
  return (
    <TouchableOpacity
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onPress={() => navigate('Stack', { screen: 'Three' })}
    >
      <Text>Movie</Text>
    </TouchableOpacity>
  );
}

export default Movie;
