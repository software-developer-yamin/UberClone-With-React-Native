import { Text, View } from "react-native";

const data = [
     {
          id: "123",
          title: "Get a ride",
          image: "https://Links.papareact.con/3pn",
          screen: "MapScreen",
     }, {
          id: "456",
          title: "Order food",
          image: "https://links.papareact.con/28w",
          screen: "EatsScreen", // Change in future...
     },
];

const NavOptions = () => {
  return (
    <View>
      <Text>NavOptions</Text>
    </View>
  );
};

export default NavOptions;
