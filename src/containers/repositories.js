import React, { Component } from "react";
import { View, Text } from "react-native";

class Repositories extends Component {
  constructor(props) {
    super(props);

    state = {
      data: null
    };
  }

  search = () => {
    fetch("https://api.github.com")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(response => {
        this.setState({
          data: response
        });
      });
  };

  render() {
    return (
      <View>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
      </View>
    );
  }
}

export default Repositories;
