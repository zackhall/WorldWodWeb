import React, {
  Component,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import API from '../Utils/wodApi';
import WodIcon from './WodIcon';

class Wod extends Component {
  constructor(props) {
    super(props);

    var wod = API.getWod(this.props.id);
    var {
      title,
      workout_title,
      workout,
      category
    } = wod;
    this.state = {
      title: title,
      scheme: workout_title,
      workout: workout,
      category: category
    };
  }

  render() {
    return (
      <ScrollView 
        style={[styles.container, { marginTop: 60 }]}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}>
        <View style={{
                alignSelf: 'stretch',
                borderBottomWidth: 1,
                borderColor: 'lightgray',
                padding: 10,
                marginRight: 20,
                marginLeft: 20,
                flex: 0.45,
                alignItems: 'center',
                justifyContent: 'center'
                }}>
          <WodIcon 
            category={this.state.category} />
          <Text style={{
            fontSize: 30,
            fontFamily: 'Iowan Old Style',
            fontWeight: '400',
            textAlign: 'center',
            paddingTop: 20,
            margin: 10
          }}>{this.state.title}</Text>
        </View>
        <View style={{ flex: 0.55, alignSelf: 'stretch' }}>
          <View style={{ margin: 10, padding: 25 }}>
            <Text style={styles.label}>INSTRUCTIONS</Text>
            <Text style={styles.bodyText}>{this.state.scheme}</Text>
          </View>
          <View style={{ margin: 10, padding: 5, paddingLeft: 25, paddingRight: 25 }}>
            <Text style={styles.label}>MOVEMENTS</Text>
            <Text style={styles.bodyText}>{this.state.workout}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFA'
  },
  label: {
    fontSize: 14,
    color: 'grey'
  },
  bodyText: {
    fontSize: 20,
    fontFamily: 'Iowan Old Style',
    fontWeight: '400',
  },
  icon: {
    height: 100,
    width: 100
  }
});

export default Wod;