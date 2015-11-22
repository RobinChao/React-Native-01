/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text, 
  View,
  LayoutAnimation,
  TouchableOpacity,
} = React;
 

var CustomButton = React.createClass({
    render () {
      return (
           <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.label}</Text>
          </View>
        )
    },
  });


var AwesomeProject = React.createClass({
 componentWillMount() {
    // Animate creation
    LayoutAnimation.spring();
  },

  getInitialState() {
    return { w: 100, h: 100 }
  },

  _onPress() {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }, 


  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress} accessible = {true} accessibilityLabel = {'Tap me'}>
          <CustomButton label = 'Press me!' />
        </TouchableOpacity>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  box:  {
    backgroundColor: '#F2E3CC',   
  }, 
  button: {
    backgroundColor: '#FF9900',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20, 
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
