import { ActivityIndicator, StyleSheet } from "react-native";
import { ScrollableThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { gql } from "../src/__generated__/gql";
import { NavigationBar } from "@/components/workout/NavigationBar";
import React from "react";
import { Workouts } from "@/components/workout/Workouts";
import { Header } from "@/components/workout/Header";
import { HeroImage } from "@/components/workout/HeroImage";
import { StartWorkoutButton } from "@/components/workout/StartWorkoutButton";
import { ScrollableCards } from "@/components/workout/ScrollableCards";
import { useQuery } from "@apollo/client";

const WORKOUTS_QUERY = gql(/* GraphQL */ `
  query getWorkouts {
    workouts {
      id
      durationInMinutes
      numberOfExercises
      exercises {
        id
        name
        sets
        reps
        equipment
        durationInMinutes
        workoutId
        exerciseGroup
      }
    }
  }
`);

export default function Index() {
  const { data, loading } = useQuery(WORKOUTS_QUERY);
  if (loading || !data?.workouts) {
    return (
      <ActivityIndicator
        style={{ backgroundColor: Colors.light.background, height: "100%" }}
      />
    );
  }
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
        <Workouts workouts={data.workouts} />
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
