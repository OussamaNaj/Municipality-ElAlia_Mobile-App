import * as React from 'react';
import { View, Text, Button} from 'react-native';
import MyTabs from './TabNavigator';
export default function Acceuil({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}