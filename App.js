import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, Button } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    this.onPressLearnMore=this.onPressLearnMore.bind(this)
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  onPressLearnMore(){
    console.log(`你按了按鈕!,isLoading=`+this.state.isLoading);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}