import React, { Component } from "react";
import { View } from "react-native";
import { RNCamera } from "react-native-camera";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            width: 300,
            height: 300,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1
          }}
        >
          <RNCamera
            style={{ flex: 1, alignSelf: "stretch" }}
            ratio="1:1"
            captureAudio={false}
            onBarCodeRead={e => {
              alert(e.data);
            }}
          ></RNCamera>
        </View>
      </View>
    );
  }
}
export default App;
