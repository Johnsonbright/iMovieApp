import React from 'react';
import {
  View,
  TextInput,
  Image,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface CustomSearchProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value?: string;
  width?: number | string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

const CustomSearch: React.FC<CustomSearchProps> = ({
  placeholder,
  onChangeText,
  value,
  width,
  style,
  inputStyle,
}) => {
  const search: ImageSourcePropType = require('../assets/search.png');

  return (
    <View
      style={{
        backgroundColor: '#F2F6FF',
        height: 60,
        width: width || 'auto',
        marginHorizontal: 12,
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#e2e2e2',
        borderWidth: 4,
        ...style,
      }}>
      <View style={{marginLeft: 10, marginRight: 15}}>
        <Image
          source={search}
          style={{width: 20, height: 25}}
          resizeMode="contain"
        />
      </View>

      <TextInput
        style={{
          paddingLeft: 10,
          color: '#1E324E',
          marginLeft: -15,
          ...inputStyle,
        }}
        placeholder={placeholder || 'Search character by name '}
        // placeholderTextColor={'#B0BCDA'}
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomSearch;
