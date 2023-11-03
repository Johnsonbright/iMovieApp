import {View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';

import DetailsCard from '../components/DetailsCard';
import {APP_SCREEN_LIST, HomeStackParamList} from '../constants';
import {Character} from '../typings/store';

type DetailsRouteProp = RouteProp<HomeStackParamList, APP_SCREEN_LIST.DETAILS>;

type DetailsProps = {
  route: DetailsRouteProp;
};

export type DetailsData = {
  name: string | undefined;
  image: string | undefined;
  species: string | undefined;
  gender: string | undefined;
  status: string | undefined;
  episode: string[] | undefined;
};

const Details: React.FC<any> = ({route}) => {
  const item = route.params?.item;
  return (
    <View style={{marginTop: 30}}>
      <DetailsCard
        name={item?.name}
        species={item.species}
        gender={item.gender}
        img={item.image}
        status={item.status}
        episode={item.episode?.length}
      />
    </View>
  );
};

export default Details;
