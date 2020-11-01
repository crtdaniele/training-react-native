import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const FirstRoute = () => <View style={{ backgroundColor: "#ff4081" }} />;
const SecondRoute = () => <View style={{ backgroundColor: "#673ab7" }} />;
const initialLayout = { width: Dimensions.get("window").width };

const Section1Screen: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <>
      <SafeAreaView>
        <Text>Test</Text>
      </SafeAreaView>
      {/* how to create a tab view native */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};

Section1Screen.displayName = "Section1Screen";

export default Section1Screen;
