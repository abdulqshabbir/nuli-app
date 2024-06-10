import { ImageRequireSource, Image } from "react-native";
import { ThemedView } from "../ThemedView";

export function HeroImage() {
  return (
    <ThemedView>
      <Image
        source={require("@/assets/images/hero.png") as ImageRequireSource}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 250,
        }}
      />
    </ThemedView>
  );
}
