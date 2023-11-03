import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

export interface CharacterCardProps {
  name: string;
  species: string;
  gender: string;
  img: string;
  status: string;
  episode: number;
}

const {width, height} = Dimensions.get('window');

const DetailsCard = ({
  name,
  species,
  gender,
  img,
  status,
  episode,
}: CharacterCardProps) => {
  console.log('🚀 ~ file: DetailsCard.tsx:30 ~ status:', status);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: img,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}> {name}</Text>
            <Text style={styles.nickName}> {species} </Text>
            <Text style={styles.dob}> {gender} </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 10,
                  backgroundColor:
                    status === 'Alive'
                      ? 'green'
                      : status === 'unknown'
                      ? 'yellow'
                      : 'red',
                }}
              />

              <Text style={styles.status}> {status} </Text>
            </View>
            <Text style={styles.status}> {episode} Episodes </Text>

            <ScrollView horizontal></ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
  },

  textContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    height: height / 1.45,
    width: '100%',
    resizeMode: 'stretch',
    overflow: 'hidden',
    borderRadius: width * 0.02,
  },
  name: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
  nickName: {
    fontSize: 16,
    padding: 5,
  },
  dob: {
    fontSize: 16,
    padding: 5,
  },

  status: {
    fontSize: 16,
    padding: 5,
  },
  occupations: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: '500',
  },
  occupationItems: {
    fontSize: 16,
  },

  appearance: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 5,
  },
  appearanceItems: {
    fontSize: 16,
  },
});
