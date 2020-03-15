import React from 'react';
import { View, Modal, Text, StyleSheet } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native-paper';

const RecipePage = props => {
  let drink = props.detailed;

  return (
    <View>
      <Overlay
        isVisible={props.isVisible}
        width="75%"
        height="50%"
        animationType="slide"
        overlayBackgroundColor="#B6A39E"
        windowBackgroundColor="rgba(0, 0, 0, 0.5)"
      >
        <View style={styles.button}>
          <Button mode="contained" color="#D0D1AC" onPress={props.onClose}>
            Save
          </Button>
          <Button mode="contained" color="#D0D1AC" onPress={props.onClose}>
            X
          </Button>
        </View>
        <View>
          <Text style={styles.name}>{drink.strDrink} </Text>
        </View>
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
          <Text>
            {drink.strMeasure6} {drink.strIngredient6}
          </Text>
          <Text>
            {drink.strMeasure7} {drink.strIngredient7}
          </Text>
        </View>
        <View>
          <Text>{drink.strInstructions}</Text>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
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
