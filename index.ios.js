/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Navigator,
  PixelRatio,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from './App/Components/Main';
import WodList from './App/Components/WodList';

var styles = StyleSheet.create({
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  navBar: {
    backgroundColor: '#333333',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#FFF',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#FFF',
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA',
  },
});

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <View style={styles.navBarLeftButton}>
          <Text
            style={[styles.navBarText, styles.navBarButtonText]}>
            <Icon 
              name='chevron-left'
              color='#000000'
              style={[styles.navBarText, styles.navBarButtonText]}
              />
            &nbsp; Back
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if (route.title.toLowerCase() === 'home') {
      return (
        <TouchableOpacity
          onPress={() => navigator.push({
            component: WodList,
            title: 'Search',
            props: {
              category: 'all'
            }
          })}>
          <View style={styles.navBarRightButton}>
              <Icon 
                name='ios-search-strong'
                color='#FFFFFA'
                style={{ fontSize: 20, fontWeight: '700', marginVertical: 10 }}
                />
          </View>
        </TouchableOpacity>
      );
    }

    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

class WorldWodWeb extends Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          component: Main,
          title: 'Home',
          index: 0
        }}
        configureScene={() => Navigator.SceneConfigs.PushFromRight}
        renderScene={this._renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }  
        />
    );
  }
  _renderScene(route, navigator) {
    var Component = route.component;

    return (

        <Component 
          {...route.props} 
          navigator={navigator} 
          route={route} />
    );
  }
}

AppRegistry.registerComponent('worldWodWeb', () => WorldWodWeb);
