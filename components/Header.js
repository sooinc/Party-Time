import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    return (
      <Appbar.Header style={{ backgroundColor: '#726E75' }}>
        {/* <Appbar.BackAction onPress={this._goBack} /> */}
        <Appbar.Content title="     " />
        {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} /> */}
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}
