import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wod from './Wod';
import List from './List';
import API from '../Utils/wodApi';
import SearchBar from 'react-native-search-bar';

class WodList extends Component {
  constructor(props) {
    super(props);

    var data =
      API.getWods(this.props.category)
        .map((obj) => {
          obj.onPress = 
            () => this.props.navigator.push({
              component: Wod,
              title: 'WOD',
              props: {
                id: obj.title
              }
            });

          return obj;
        });

    this.state = {
      data: data
    };
  }

  _searchButtonPress(text) {
    this.refs.searchbar.blur();

    this.setState({
      data: API.searchWods(text, this.props.category)
    });
  }

  _searchChangeText(text) {
    // if text is not empty, return
    if (text) return

    // Otherwise, if text is cleared reset
    this.refs.searchbar.blur();

    this.setState({
      data: API.getWods(this.props.category)
    });
  }

  render() {
    return ( 
      <View style={{ marginTop: 62, flex: 1 }}>
        <SearchBar
          ref='searchbar'
          placeholder='Search WODs'
          onSearchButtonPress={this._searchButtonPress.bind(this)}
          onChangeText={this._searchChangeText.bind(this)}
          textFieldBackgroundColor='#FFFFFA' />
        <List
          data={this.state.data}
          labelKey='title'
          metaKey='workout_title'
          />
      </View> 
    );
  }
}

WodList.defaultProps = {
  category: 'all'
};

export default WodList;