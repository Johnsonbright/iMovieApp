import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CharacterCard from '../components/characterCard';
import Indicator from '../components/Indicator';
import {
  APP_SCREEN_LIST,
  DEVICE_FULL_HEIGHT,
  HomeStackParamList,
} from '../constants';
import useCharacters from '../hooks/useChaacters';
import {resetState, searchCharacters} from '../store/slice/characterSlice';
import {Character} from '../typings/store';
import CustomSearch from '../components/CustomSearch';
import {store} from '../store/store';
import {StackNavigationProp} from '@react-navigation/stack';

type ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  APP_SCREEN_LIST.HOME
>;

interface Props {
  navigation: ScreenNavigationProp;
}

const CharacterScreen: FC<Props> = ({navigation: {navigate}}) => {
  const [page, setPage] = useState(1);

  const [querry, setQuerry] = useState('');

  const dispatch = useDispatch();

  const {
    characters: data,
    loading,
    error,
    infos,
    fetchData,
  } = useCharacters(page);

  const [character, setCharacter] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const onchange = (text: string) => {
    if (text) {
      setQuerry(text);
      const newData = data.filter(item => {
        const itemData = `${item?.name.toLowerCase()} `;
        const textData = text.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
      console.log(
        '🚀 ~ file: Home.tsx:60 ~ newData ~ newData:',
        newData.length,
      );

      setCharacter(newData);
    } else {
      setCharacter(data);
    }
  };

  useEffect(() => {
    setCharacter(data);
    // dispatch(resetState());
  }, [data]);

  const loadMore = () => {
    if (
      !querry &&
      character?.length &&
      character?.length < infos.count &&
      page < infos.pages
    ) {
      setPage(pre => pre + 1);
    }
  };

  const handleClick = (item: Character) => {
    navigate(APP_SCREEN_LIST.DETAILS, {item});
  };

  const ListComponent = () => {
    return character?.length < infos?.count && loading ? (
      <Indicator />
    ) : (
      <View>
        {!querry?.length && (
          <Text style={{textAlign: 'center', fontSize: 16}}>No more data</Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading && page === 1 && (
        <ActivityIndicator style={{flex: 1}} size="large" color="red" />
      )}

      <View style={{marginBottom: 10}}>
        <CustomSearch onChangeText={onchange} style={{}} />
      </View>

      <FlatList
        data={character}
        keyExtractor={(item, index) => 'key' + index}
        numColumns={1}
        renderItem={(item: {[key: string]: any}) => {
          return (
            <CharacterCard item={item} onPress={() => handleClick(item)} />
          );
        }}
        ListFooterComponent={ListComponent}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    marginTop: DEVICE_FULL_HEIGHT * 0.06,
  },
});
