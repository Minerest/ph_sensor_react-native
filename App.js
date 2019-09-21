import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      warning_text: "",
    }

    this.check_for_sensor = this.check_for_sensor.bind(this);
  }

  check_for_sensor(){
    this.setState({
      warning_text: "Warning, no PH Sensor is attached to the phone. Please connect the sensor"
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.container_header}>PH Sensor</Text>
        <View style={styles.columns, styles.data}><Text>123</Text></View>
        <View style={styles.columns}>
          <Text style={styles.warning}>{this.state.warning_text}</Text>
        </View>
        <View style={styles.buttons} onTouchStart={this.check_for_sensor}><Text style={styles.button_text}>Get PH Reading</Text></View>
        <View style={styles.columns}></View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63d6e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
    container_header: {
      color: "#000",
      textAlign: "center",
      fontSize: 50,
      paddingTop: "5%",
      marginTop: "5%",
      marginBottom: "25%",
      alignSelf: "stretch",
      backgroundColor: "#FFF",
      fontFamily: "Avenir Next Condensed"
    },
    columns: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",

    },
    buttons: {
      backgroundColor: "#011f94",
      borderRadius: 15,
    },
    button_text: {
      color: "white",
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,

    },
    warning: {
      flex: 1,
      height: 65,
      color: "#bd0000",
      fontSize: 25,
    },
    data: {
      flex: 1,
      alignSelf: "stretch",
      alignItems: "center",
    }
});
