import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const HomePageScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Prova")}>Home Page</Text>
    </View>
  );
};

HomePageScreen.displayName = "HomePageScreen";

export default HomePageScreen;
