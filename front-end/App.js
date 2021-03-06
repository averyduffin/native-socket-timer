import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { subscribeToTimer } from './src/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet'
    };
    subscribeToTimer((err, timestamp) => {
      this.setState({ timestamp }) 
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the timer value: {this.state.timestamp}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
