import React from 'react';
import { View, Button, Modal, Text } from 'react-native';

const RecipePage = props => {
  console.log('inside modal', props.detailed);
  return (
    <Modal visible={props.visible} animationType="slide">
      <View>
        <Text>hi</Text>
      </View>
      <Button title="x" color="red" onPress={props.onClose} />
    </Modal>
  );
};

export default RecipePage;
