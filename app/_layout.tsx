import { Stack } from "expo-router";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useFonts, FontSource } from "expo-font";
import { ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf") as FontSource,
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf") as FontSource,
    OpenSansLight: require("../assets/fonts/OpenSans-Light.ttf") as FontSource,
    OpenSansBold: require("../assets/fonts/OpenSans-Bold.ttf") as FontSource,
    OpenSansSemiBold:
      require("../assets/fonts/OpenSans-SemiBold.ttf") as FontSource,
    WorkSans: require("../assets/fonts/WorkSans-Regular.ttf") as FontSource,
    WorkSansBold: require("../assets/fonts/WorkSans-Bold.ttf") as FontSource,
    WorkSansSemiBold:
      require("../assets/fonts/WorkSans-SemiBold.ttf") as FontSource,
    WorkSansLight: require("../assets/fonts/WorkSans-Light.ttf") as FontSource,
  });
  if (error) {
    console.error(error);
  }
  if (!loaded) {
    return (
      <ActivityIndicator
        style={{ backgroundColor: Colors.light.background, height: "100%" }}
      />
    );
  }
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ApolloProvider>
  );
}
