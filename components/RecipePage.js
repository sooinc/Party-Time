import React from 'react';
import { View, Modal, Text, StyleSheet, Image } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native-paper';

const RecipePage = props => {
  let drink = props.detailed;

  return (
    <View>
      <Overlay
        isVisible={props.isVisible}
        width="75%"
        height="65%"
        animationType="fade"
        overlayBackgroundColor="#B6A39E"
        windowBackgroundColor="rgba(0, 0, 0, 0.5)"
      >
        <View style={styles.button}>
          <Button mode="contained" color="#726E75" onPress={props.onClose}>
            Save
          </Button>
          <Button mode="contained" color="#726E75" onPress={props.onClose}>
            X
          </Button>
        </View>
        <View>
          <Text style={styles.name}>{drink.strDrink} </Text>
        </View>
        <View>
          <View>
            <Text>
              {drink.strMeasure1} {drink.strIngredient1}
            </Text>
            <Text>
              {drink.strMeasure2} {drink.strIngredient2}
            </Text>
            <Text>
              {drink.strMeasure3} {drink.strIngredient3}
            </Text>
            <Text>
              {drink.strMeasure4} {drink.strIngredient4}
            </Text>
            <Text>
              {drink.strMeasure5} {drink.strIngredient5}
            </Text>
            {/* {drink.strMeasure6} {drink.strIngredient6}
              {drink.strMeasure7} {drink.strIngredient7} */}
          </View>
          {/* <View>
            <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
          </View> */}
        </View>
        <View>
          <Text style={{ color: 'white', marginTop: 15 }}>
            {drink.strInstructions}
          </Text>
        </View>
        <View>
          <Text style={{ color: 'white', marginTop: 15 }}>
            Suggested Nearby Bars:
          </Text>
          <Text style={{ color: 'white' }}>{props.places1.name}</Text>
          <Text style={{ color: 'white' }}>{props.places2.name}</Text>
          <Text style={{ color: 'white' }}>{props.places3.name}</Text>
          <Text style={{ color: 'white' }}>{props.places4.name}</Text>
          <Text style={{ color: 'white' }}>{props.places5.name}</Text>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Futura',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
});

export default RecipePage;
