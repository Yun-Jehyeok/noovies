import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Text } from 'react-native';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);

  const startLoading = async () => {
    // 여기가 await 해야 되는 부분
    await new Promise((resolve) => setTimeout(resolve, 10000));
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }

  return <Text>We are done Loading</Text>;
}
