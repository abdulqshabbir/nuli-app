/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const primary = "#262C45";

export const Colors = {
  light: {
    text: primary,
    button: primary,
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    equipment_background: "#E1EFF4",
    body_focus_background: "#fff3e0",
    instructions_background: "#FEEFF0",
  },
  // come back to this
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    equipment_background: "#E1EFF4",
    body_focus_background: "#fff3e0",
    instructions_background: "#FEEFF0",
  },
} as const;
