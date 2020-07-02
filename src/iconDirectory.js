import React from 'react';
import {
  Ionicons,
  Entypo,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  SimpleLineIcons,
  MaterialIcons,
  EvilIcons
} from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { View } from 'react-native';

export default function IconDirectory({ type, name, size, focused, customColor, style }) {
  return (
    <View style={style}>
      {type === 'Entypo' && (
        <Entypo
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'Ionicons' && (
        <Ionicons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'FontAwesome' && (
        <FontAwesome
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'Foundation' && (
        <Foundation
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'Feather' && (
        <Feather
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'AntDesign' && (
        <AntDesign
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'SimpleLineIcons' && (
        <SimpleLineIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'MaterialIcons' && (
        <MaterialIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
      {type === 'EvilIcons' && (
        <EvilIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }
        />
      )}
    </View>
  );
}
