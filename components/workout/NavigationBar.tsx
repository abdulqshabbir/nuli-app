import { ImageRequireSource, Image, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

export function NavigationBar() {
  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 32,
      }}
    >
      <ThemedView>
        <Image
          source={require("@/assets/images/back.png") as ImageRequireSource}
          style={styles.icon}
          resizeMode="contain"
        />
      </ThemedView>
      <ThemedView style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Image
          source={require("@/assets/images/gear.png") as ImageRequireSource}
          style={styles.icon}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/heart.png") as ImageRequireSource}
          resizeMode="contain"
          style={styles.icon}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
