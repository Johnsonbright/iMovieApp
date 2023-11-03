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
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  episode: string[];
};

const Details: React.FC<DetailsProps> = ({route}) => {
  console.log('🚀 ~ file: Details.tsx:25 ~ route:', route.params);

  const {name, image, species, gender, status, episode}: DetailsData =
    route.params?.item?.item;

  return (
    <View style={{marginTop: 30}}>
      <DetailsCard
        name={name}
        species={species}
        gender={gender}
        img={image}
        status={status}
        episode={episode?.length}
      />
    </View>
  );
};

export default Details;
