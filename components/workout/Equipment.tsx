import { ImageRequireSource, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
import { ThemedView, ScrollableThemedView } from "../ThemedView";
import { CARD_WIDTH, CARD_HEIGHT } from "@/constants/Sizes";

export function Equipment() {
  return (
    <ThemedView
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: Colors.light.equipment_background,
        gap: 26,
        display: "flex",
        justifyContent: "center",
        borderRadius: 38,
        overflow: "scroll",
        paddingLeft: 16,
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <ThemedText
        type="title"
        style={{
          fontSize: 24,
          backgroundColor: Colors.light.equipment_background,
          fontFamily: "Work Sans Semi Bold",
        }}
      >
        Equipment
      </ThemedText>
      <ScrollableThemedView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: Colors.light.equipment_background,
        }}
      >
        <EquipmentIcon
          source={
            require("@/assets/images/equipment_barbell.png") as ImageRequireSource
          }
          text="BARBELL"
        />
        <EquipmentIcon
          source={
            require("@/assets/images/equipment_cable.png") as ImageRequireSource
          }
          text="CABLE"
        />
        <EquipmentIcon
          source={
            require("@/assets/images/equipment_dumbell.png") as ImageRequireSource
          }
          text="DUMBELL"
        />
        <EquipmentIcon
          source={
            require("@/assets/images/equipment_resistance_band.png") as ImageRequireSource
          }
          text="RESISTANCE BAND"
        />
        <EquipmentIcon
          source={
            require("@/assets/images/equipment_barbell.png") as ImageRequireSource
          }
          text="BARBELL"
        />
        <EquipmentIcon
          source={
            require("@/assets/images/equipment_cable.png") as ImageRequireSource
          }
          text="CABLE"
        />
      </ScrollableThemedView>
    </ThemedView>
  );
}

function EquipmentIcon({
  source,
  text,
}: {
  source: ImageRequireSource;
  text: string;
}) {
  return (
    <ThemedView
      style={{
        backgroundColor: Colors.light.equipment_background,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Image
        source={source}
        resizeMode="contain"
        style={styles.equipment_icon}
      />
      <ThemedText style={styles.equipment_icon_text}>{text}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  equipment_icon: {
    height: 44,
    width: 44,
    borderRadius: 11,
  },
  equipment_icon_text: {
    width: 62,
    fontSize: 10,
    lineHeight: 13.6,
    textAlign: "center",
    fontFamily: "Open Sans Light",
  },
});
