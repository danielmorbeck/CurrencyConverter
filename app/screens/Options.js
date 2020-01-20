import React, { Component } from "react";
import { ScrollView, StatusBar, Linking } from "react-native";
import PropTypes from "prop-types";

import { ListItem, Separator } from "../components/List";
import { connectAlert } from "../components/Alert";

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  };

  handleThemesPress = () => {
    this.props.navigation.navigate("Themes");
  };

  handleSitePress = () => {
    Linking.openURL("http://fixer.io").catch(() =>
      this.props.alertWithType(
        "error",
        "Sorry!",
        "Fixer.io can't be opened right now"
      )
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          // customIcon={
          //   <Ionicons
          //     name="ios-arrow-forward"
          //     color={ICON_COLOR}
          //     size={ICON_SIZE}
          //   />
          // }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          // customIcon={
          //   <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE} />
          // }
        />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
