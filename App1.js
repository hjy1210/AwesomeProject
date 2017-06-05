import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={this.props.style}>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}>{display}</Text>
    );
  }
}


export default class LotsOfGreetings extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center', backgroundColor: 'powderblue' }} >
          <Blink text='Rexxar' style={[styles.bigblue]} />
          <Blink text='Jaina' style={styles.red} />
          <Greeting name='Valeera' style={[styles.bigblue, styles.red]} />
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }}
            style={{ width: 193, height: 110 }} />
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }}
            style={{ width: 193, height: 220 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: { alignItems: 'center' },
  flex1: { flex: 1 },
  flex3: { flex: 3 },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red',
  },
});