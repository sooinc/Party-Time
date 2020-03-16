import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tabs from './Tabs';
import ConnectedMain from '../screens/Main';

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'saved' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Tabs
          selected={this.state.page}
          style={{ backgroundColor: '#726E75' }}
          //   selectedStyle={{ color: 'red' }}
          onSelect={el => this.setState({ page: el.props.name })}
        >
          <Text name="home" color="white" selectedStyle={{ color: 'white' }}>
            Home
          </Text>
          <Text name="saved" color="white" selectedStyle={{ color: 'white' }}>
            Saved
          </Text>
        </Tabs>
        {this.state.page === 'home' ? (
          <ConnectedMain />
        ) : (
          <Text style={styles.instructions}>{this.state.page}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default TabBar;
