import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Character} from '../typings/store';

const {width, height} = Dimensions.get('window');

const CharacterCard = ({
  item,
  onPress,
}: {
  item: Character;
  onPress: () => void;
}) => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: item.item.image,
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Name : {item.item.name}</Text>
            <Text style={styles.nickName}>
              Last known location : {item.item.location?.name}
            </Text>
            <Text style={styles.dob}>Species : {item.item.species} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CharacterCard;

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
  },

  textContainer: {
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  image: {
    height: height / 4,
    marginVertical: width * 0.0,
    width: '100%',
    resizeMode: 'stretch',
    overflow: 'hidden',
    borderRadius: width * 0.02,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  nickName: {
    textAlign: 'center',

    fontSize: 14,
  },
  dob: {
    fontSize: 14,
    textAlign: 'center',
  },
});
