import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'default',
    };
  }

  componentDidMount(){
    // when this component is inatialized
  }


  componentDidUpdate(){
     // when this component is updated/ rendered
  }

  componentWillUnmount(){
     // when this component is updated/ rendered
  }

  onTextPress = () => {
    this.setState({
      text: 'updated'
    })
    }


  render() {
    const {text} = this.state;

    return <Text onPress={this.onTextPress} style={styles.title}>{text}</Text>;
  }
}

export default Title;
