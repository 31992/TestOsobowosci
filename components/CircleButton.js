import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default class SimpleCircleButton extends React.Component {
  render(){
    let localStyles = styles(this.props)

    return (
      <View style={localStyles.container}>
        <TouchableOpacity
          activeOpacity={.8}
          style = {localStyles.button}
          onPress = {this.props.onPress}
        >
          {this.props.children}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = (props) => StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    borderWidth: 3,
    borderRadius: (props.circleDiameter / 2),
    width: props.circleDiameter,
    height: props.circleDiameter,
  },
});