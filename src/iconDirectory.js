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
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'Ionicons' && (
        <Ionicons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'FontAwesome' && (
        <FontAwesome
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'Foundation' && (
        <Foundation
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'Feather' && (
        <Feather
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'AntDesign' && (
        <AntDesign
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'SimpleLineIcons' && (
        <SimpleLineIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'MaterialIcons' && (
        <MaterialIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
      {type === 'EvilIcons' && (
        <EvilIcons
          name={name}
          size={size ? size : 26}
          style={{ marginBottom: -3 }}
          color={
            customColor ? customColor : focused ? '#2f95dc' : '#ccc'
          }
        />
      )}
    </View>
  );
}
