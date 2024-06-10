import { StyleSheet } from "react-native";
import { ScrollableThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationBar } from "@/components/workout/NavigationBar";
import React from "react";
import { Workouts } from "@/components/workout/Workouts";
import { Header } from "@/components/workout/Header";
import { HeroImage } from "@/components/workout/HeroImage";
import { StartWorkoutButton } from "@/components/workout/StartWorkoutButton";
import { ScrollableCards } from "@/components/workout/ScrollableCards";


export default function Index() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.light.background,
      }}
    >
      <ScrollableThemedView style={styles.container}>
        <NavigationBar />
        <Header />
        <HeroImage />
        <ScrollableCards />
        <Workouts />
      </ScrollableThemedView>
      <StartWorkoutButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});
