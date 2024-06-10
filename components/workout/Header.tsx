import { ImageRequireSource, Image, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export function Header() {
  return (
    <ThemedView
      style={{
        paddingLeft: 32,
        display: "flex",
        gap: 10,
      }}
    >
      <ThemedText
        type="title"
        style={{
          fontSize: 26,
          paddingLeft: 8,
          fontFamily: "Work Sans Semi Bold",
        }}
      >
        Full Body
      </ThemedText>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image
          source={require("@/assets/images/candice.png") as ImageRequireSource}
          resizeMode="contain"
          style={[
            styles.icon,
            {
              position: "relative",
              left: 3,
            },
          ]}
        />
        <ThemedText
          style={{
            fontWeight: 800,
            fontSize: 12,
            lineHeight: 12,
            fontFamily: "Open Sans Light",
          }}
        >
          WITH CANDICE
        </ThemedText>
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
