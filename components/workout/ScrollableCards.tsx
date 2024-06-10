import { CARD_WIDTH, CARD_HEIGHT } from "@/constants/Sizes";
import { Dimensions, ScrollView, View, StyleSheet } from "react-native";
import { BodyFocus } from "./BodyFocus";
import { Equipment } from "./Equipment";
import { Instructions } from "./Instructions";

export function ScrollableCards() {
  const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;
  const styles = StyleSheet.create({
    cardStyles: {
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
    },
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      decelerationRate={0}
      snapToInterval={CARD_WIDTH + 10}
      snapToAlignment="center"
      contentInset={{
        top: 0,
        left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
        bottom: 0,
        right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
      }}
      contentContainerStyle={{
        paddingHorizontal: 0,
      }}
      style={{
        marginBottom: 20,
      }}
    >
      <View key="equipment" style={styles.cardStyles}>
        <Equipment />
      </View>
      <View key="full-body-focus" style={styles.cardStyles}>
        <BodyFocus />
      </View>
      <View key="instructions" style={styles.cardStyles}>
        <Instructions />
      </View>
    </ScrollView>
  );
}
