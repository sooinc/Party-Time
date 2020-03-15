import React from 'react';
import { View, Button, Modal, Text } from 'react-native';

const RecipePage = props => {
  let drink = props.detailed;

  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <Text>{drink.strDrink}</Text>
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
      <Button title="x" color="red" onPress={props.onClose} />
    </Modal>
  );
};

export default RecipePage;
