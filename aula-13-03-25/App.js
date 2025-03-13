const { View, Button } = require("react-native")

class Classe extends React.PureComponent{
  state = {
    titleText: "Ninguém apertou el botón"
  }
  onPressButton = (name) => {
    this.setState({titleText: `${name} apertou o botón!`})
  }
  render(){
    <View>
      <Text>
        {this.state.titleText}
      </Text>
      <Button
        title="Stop Capturing"
        onPress={()=> this.onPressButton(this.props)}
        color="#FF0000"/>
    </View>
  }
}