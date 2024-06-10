import { ImageRequireSource, Image } from "react-native";
import { ThemedButton } from "../ThemedButton";

function RightArrowIcon() {
  return (
    <Image
      source={require("@/assets/images/right_arrow.png") as ImageRequireSource}
      style={{
        height: 14,
        width: 14,
      }}
      resizeMode="contain"
    />
  );
}

export function StartWorkoutButton() {
  return <ThemedButton title="START WORKOUT" icon={<RightArrowIcon />} />;
}
