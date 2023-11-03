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
  DEVICE_FULL_WIDTH,
  HomeStackParamList,
} from '../constants';
import useCharacters from '../hooks/useChaacters';
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

  const isTablet = DEVICE_FULL_WIDTH >= 600 && DEVICE_FULL_HEIGHT >= 600;

  const {
    characters: data,
    loading,
    error,
    infos,
    fetchData,
  } = useCharacters(page);

  const [character, setCharacter] = useState<Character[]>([]);

  const onchange = (text: string) => {
    if (text) {
      setQuerry(text);
      const newData: Character[] = data.filter(item => {
        const itemData = `${item?.name ? item?.name.toLowerCase() : ''} `;
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });

      setCharacter(newData);
    } else {
      setCharacter(data);
    }
  };

  useEffect(() => {
    setCharacter(data);
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
    navigate(APP_SCREEN_LIST.DETAILS, {item: item?.item});
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
        numColumns={isTablet ? 2 : 1}
        renderItem={(item: {[key: string]: any}) => (
          <CharacterCard item={item} onPress={() => handleClick(item)} />
        )}
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
