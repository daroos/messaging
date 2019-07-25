import Constants from "expo-constants";
import {
  NetInfo,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import React from "react";

const statusHeight = Platform.OS === "ios" ? Constants.statusBarHeight : 0;

export default class Status extends React.Component {
  state = {
    info: null
  };

  render() {
    const { info } = this.state;

    const isConnected = info !== "none";
    const backgroundColor = isConnected ? "white" : "red";

    const statusBar = (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isConnected ? "dark-content" : "light-content"}
        animated={false}
      />
    );

    if (Platform.OS === "ios") {
      return (
        <View style={[styles.status, { backgroundColor }]}>{statusBar}</View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight
  }
});
