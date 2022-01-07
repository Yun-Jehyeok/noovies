import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Stack from './Stack';

const Nav = createNativeStackNavigator();

function Root() {
  // 이것도 위쪽에 있는게 먼저 보여지니까
  // 딱 화면 키면 Tabs만 보이고
  // 2개의 네비게이션을 하나로 묶어둬서 서로 이동도 가능하게 한다 이거고만
  // 그럼 Tabs를 선으로 두고 Stack에 뭐 디테일 페이지나 이런거 하면 될듯?
  return (
    <Nav.Navigator screenOptions={{ headerShown: false }}>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="Stack" component={Stack} />
    </Nav.Navigator>
  );
}

export default Root;
