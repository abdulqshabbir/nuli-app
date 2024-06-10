import {
  View,
  type ViewProps,
  ScrollView,
  type ScrollViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}

export type ScrollableThemedViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ScrollableThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ScrollableThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );
  return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}
