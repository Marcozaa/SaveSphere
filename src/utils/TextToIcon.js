import Icon from "react-native-vector-icons/Ionicons";

function textToIconUtil(text) {
  let icon;
  switch (text) {
    case "Shopping":
      icon = <Icon name="car" size={30} color="#AEC6CF" />;
      break;
    case "Food":
      icon = <Icon name="fast-food" size={30} color="#FF6961" />;
      break;
    case "Transportation":
      icon = <Icon name="car" size={30} color="#AEC6CF" />;
      break;
    case "Entertainment":
      icon = <Icon name="game-controller" size={30} color="#FDB813" />;
      break;
    case "Utilities":
      icon = <Icon name="flash" size={30} color="#CFCFCF" />;
      break;
    case "Rent":
      icon = <Icon name="home" size={30} color="#F49AC2" />;
      break;
    case "Health":
      icon = <Icon name="medkit" size={30} color="#FFB347" />;
      break;
    case "Trips":
      icon = <Icon name="airplane" size={30} color="#9FE2BF" />;
      break;
    default:
      icon = <Icon name="help-circle" size={30} color="#808080" />;
      break;
  }
  return icon;
}

export default textToIconUtil;
