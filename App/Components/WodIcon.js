import React, {
  Component,
  Image,
  StyleSheet,
  View,
} from 'react-native';

class WodIcon extends Component {
  render() {
    const { category } = this.props;
    const assets = {
      girls: require('../Assets/noun_387165_cc.png'),
      heroes: require('../Assets/noun_105374_cc.png'),
      tributes: require('../Assets/noun_41430_cc.png'),
      open: require('../Assets/noun_129660_cc.png')
    };

    return (
      <Image
        source={assets[category]}
        style={styles.icon}
        resizeMode={Image.resizeMode.contain}
      />
    );
  }
}

WodIcon.propTypes = {
  category: React.PropTypes.oneOf(['girls', 'heroes', 'tributes', 'open'])
};

const styles = StyleSheet.create({
  icon: {
    height: 100,
    width: 100
  }
});

export default WodIcon;