import AppLoading from 'expo-app-loading';
import React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

// const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font))
// const loadImages = (images) => images.map((image) => {
//   if(typeof image === 'string') {
//     return Image.prefetch(image);
//   } else {
//     return Asset.loadAsync(image);
//   }
// })

export default function App() {
  // Hooks 없이 사용하기

  // const [ready, setReady] = useState(false);
  // const onFinish = () => setReady(true);

  // const startLoading = async () => {
  //   const fonts = loadFonts([Ionicons.font]);
  //   const images = loadImages([require('./my-face.jpeg')]);

  //   await Promise.all([...fonts, ...images])
  // };

  // if (!ready) {
  //   return (
  //     <AppLoading
  //       startAsync={startLoading}
  //       onFinish={onFinish}
  //       onError={console.error}
  //     />
  //   );
  // }

  /////////////////////////////////////
  // Hooks 사용하기
  // 단, Image.prefetch와 같이 외부에서 뭘 받아올 수는 없으며
  // 로딩 함수에서 뭘 수행할 수는 없다.
  // 즉, AppLoading이 하는 일이 assets 로딩밖에 없다면 Hook을 사용
  const [assets] = useAssets([require('./my-face.jpeg')]);
  const [loaded] = Font.useFonts(Ionicons.font);

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
