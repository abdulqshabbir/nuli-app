import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, Pressable, type PressableProps } from "react-native";

export type ThemedButtonProps = Omit<PressableProps, "title"> & {
  title: string;
  icon?: React.ReactNode;
};

export function ThemedButton({ icon, title, ...props }: ThemedButtonProps) {
  return (
    <Pressable style={styles.buttonContainer} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
      {icon && icon}
    </Pressable>
  );
}

export function ThemedCircleButton({
  icon,
  ...props
}: PressableProps & { icon: React.ReactNode }) {
  return (
    <Pressable
      style={{
        backgroundColor: Colors.light.button,
        width: 26,
        height: 26,
        borderRadius: 13,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 56,
    borderRadius: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    backgroundColor: Colors.light.button,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 17.6,
    textAlign: "center",
    color: "#fff",
  },
});
