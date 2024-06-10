import { CARD_WIDTH, CARD_HEIGHT } from "@/constants/Sizes";
import { ImageRequireSource, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

export function BodyFocus() {
  return (
    <ThemedView
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: Colors.light.body_focus_background,
        gap: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderRadius: 38,
        overflow: "scroll",
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: Colors.light.body_focus_background,
          gap: 32,
        }}
      >
        <ThemedText
          type="title"
          style={{
            fontSize: 24,
            fontFamily: "Work Sans Semi Bold",
          }}
        >
          Body Focus
        </ThemedText>
        <ThemedText
          type="title"
          style={{
            fontSize: 16,
            lineHeight: 16.9,
            fontWeight: 400,
            fontFamily: "Open Sans Light",
          }}
        >
          FULL BODY
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={{
          backgroundColor: Colors.light.body_focus_background,
        }}
      >
        <Image
          source={
            require("@/assets/images/muscle_groups.png") as ImageRequireSource
          }
          style={{
            height: 120,
            borderRadius: 22,
            position: "relative",
            left: -90,
          }}
          resizeMode="contain"
        />
      </ThemedView>
    </ThemedView>
  );
}
