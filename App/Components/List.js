import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class List extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      ds: ds,
      dataSource: ds.cloneWithRows(this.props.data)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={
            (sectionId, rowId) => 
              <View key={`${sectionId}-${rowId}`} style={styles.separator} />
          }
        />
      </View>
    );
  }

  renderRow(data) {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={data.onPress}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.rowDataView}>
              <Text style={styles.rowText}>{data[this.props.labelKey]}</Text>
              <Text style={styles.rowTextMeta}>{data[this.props.metaKey]}</Text>
            </View>
            <View style={styles.chevronView}>
              <Icon 
                name='chevron-right'
                style={styles.chevron} />
            </View>
          </View>
        </TouchableOpacity>
      </View>    
    );
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.data == this.props.data) return;
    
    this.setState({
      dataSource: this.state.ds.cloneWithRows(nextProps.data)
    });
  }
}

List.propTypes = {
  labelKey: React.PropTypes.string.isRequired,
  metaKey: React.PropTypes.string.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

List.defaultProps = {
  labelKey: 'label',
  metaKey: 'meta',
  data: []
};

const styles = StyleSheet.create({
  chevron: {
    color: 'lightgrey',
    textAlign: 'right',
    fontSize: 20
  },
  chevronView: {
    flex: 0.1,
    alignSelf: 'center'
  },
  container: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#FFFFF9'
  },
  icon: {
    height: 100,
    width: 100
  },
  row: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1,
    justifyContent: 'center'
  },
  rowDataView: {
    flex: 0.9
  },
  rowText: {
    fontSize: 16,
    fontFamily: 'Iowan Old Style',
    fontWeight: '400'
  },
  rowTextMeta: {
    fontSize: 12,
    fontWeight: '400',
    color: 'gray'
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginRight: 25,
    marginLeft: 25
  }
});

export default List;