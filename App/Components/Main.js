import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import WodList from './WodList';
import List from './List';
import Icon from 'react-native-vector-icons/Ionicons';

class Main extends Component {
  constructor() {
    super();

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      data: [{
          label: 'Girl Wods',
          meta: 'Some additional metadata',
          onPress: () => this.props.navigator.push({
            component: WodList,
            title: 'Girl Wods',
            props: {
              category: 'girls'
            }
          })
        }, {
          label: 'CrossFit Open Wods',
          meta: 'Wods used in the CrossFit open',
          onPress: () => this.props.navigator.push({
            component: WodList,
            title: 'CrossFit Open Wods',
            props: {
              category: 'open'
            }
          })
        }, {
          label: 'Hero Wods',
          meta: 'Hero benchmark Wods',
          onPress: () => this.props.navigator.push({
            component: WodList,
            title: 'Hero Wods',
            props: {
              category: 'heroes'
            }
          })
        }, {
          label: 'Tribute Wods & More',
          meta: 'Tribute Wods and other named Wods',
          onPress: () => this.props.navigator.push({
            component: WodList,
            title: 'Tribute Wods & More',
            props: {
              category: 'tributes'
            }
          })
        }, {
          label: 'All Wods',
          meta: 'The full list of WODs',
          onPress: () => this.props.navigator.push({
            component: WodList,
            title: 'All Wods',
            props: {
              category: 'all'
            }
          })
        }]
    }
  }

  render() {
    return (
      <View style={[styles.container, { marginTop: 60 }]}>
        <View style={[styles.center, { flex: 0.45 }]}>
          <Image
            source={require('../Assets/noun_371983_cc.png')}
            style={styles.icon}
            resizeMode={Image.resizeMode.contain}
          />
          <Text style={styles.header}>
            World Wod Web
          </Text>
        </View>
        <View style={[styles.center, { flex: 0.55, alignSelf: 'stretch' }]}>
          <View
            style={styles.divider}>
            <Text style={{textAlign: 'center'}}>
              Find a WOD
            </Text>
          </View>
          <List
            data={this.state.data}
            labelKey='label'
            metaKey='meta'
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFF9'
  },
  header: {
    fontSize: 30,
    fontFamily: 'Iowan Old Style',
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 20,
    margin: 10
  },
  icon: {
    height: 100,
    width: 100
  },
  divider: {
    alignSelf: 'stretch',
    backgroundColor: '#F6F5F1', 
    borderTopWidth: 1, 
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
  }
});

export default Main;