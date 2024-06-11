import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { ImageRequireSource, StyleSheet, Image } from "react-native";
import { ThemedCircleButton } from "../ThemedButton";
import { type Workout } from "@/src/__generated__/graphql";
import { gql, useMutation } from "@apollo/client";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
type GroupedExercises = {
  groupName: string;
  exercises: Exercise[];
};

export function Workouts({ workouts }: { workouts: Workout[] }) {
  const firstWorkout = workouts[0];
  const exercisesGrouped = firstWorkout.exercises.reduce(
    (grouped: GroupedExercises[], exercise) => {
      if (!exercise.exerciseGroup) {
        return grouped;
      }
      const groupIdx = grouped.findIndex(
        (g) => g.groupName === exercise.exerciseGroup,
      );
      if (groupIdx === -1) {
        grouped.push({
          groupName: exercise.exerciseGroup,
          exercises: [
            {
              exerciseId: exercise.id,
              exerciseDescription: exercise.name,
              sets: exercise.sets,
              reps: exercise.reps,
              // weight: exercise.weight,
            },
          ],
        });
      } else {
        grouped[groupIdx].exercises.push({
          exerciseId: exercise.id,
          exerciseDescription: exercise.name,
          sets: exercise.sets,
          reps: exercise.reps,
          // weight: exercise.weight,
        });
      }
      return grouped;
    },
    [],
  );
  return (
    <ThemedView
      style={{
        display: "flex",
        gap: 20,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <ThemedView
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 12,
        }}
      >
        <ThemedText
          style={{
            fontSize: 24,
            lineHeight: 28.8,
            paddingLeft: 25,
            fontFamily: "Work Sans Bold",
          }}
        >
          Workout
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 14,
            lineHeight: 14,
            paddingLeft: 25,
            fontWeight: 400,
            fontFamily: "Open Sans Light",
          }}
        >
          {firstWorkout.durationInMinutes} Min •{" "}
          {firstWorkout.numberOfExercises} Exercises
        </ThemedText>
      </ThemedView>
      {exercisesGrouped.map((group) => {
        return (
          <ExerciseGroup
            key={group.groupName}
            groupName={group.groupName}
            exercises={group.exercises}
            workoutId={firstWorkout.id}
          />
        );
      })}
    </ThemedView>
  );
}

type Exercise = {
  exerciseId: number;
  exerciseDescription: string;
  sets: number;
  reps: string;
  weight?: string;
};

function getFullGroupName(groupName: string) {
  if (groupName === "superset") {
    return "Super Set • 4 rouds";
  }
  if (groupName === "triset") {
    return "Tri Set • 4 rouds";
  }
  if (groupName === "circuit") {
    return "Circuit • 4 rouds";
  }
  return groupName;
}

function ExerciseGroup({
  groupName,
  exercises,
  workoutId,
}: {
  groupName: string;
  exercises: Exercise[];
  workoutId: number;
}) {
  return (
    <ThemedView>
      <ThemedText
        style={{
          fontWeight: 600,
          fontSize: 14,
          color: "#BDBDBD",
          paddingLeft: 45,
          paddingRight: 45,
          height: 32,
        }}
      >
        {getFullGroupName(groupName)}
      </ThemedText>
      <ThemedView
        style={{
          borderWidth: 1,
          borderColor: "#E9E9E9",
          padding: 6,
          gap: 12,
          display: "flex",
          borderRadius: 28,
        }}
      >
        {exercises.map((e, i) => (
          <ExerciseItem
            key={`${e.exerciseId}-${i}`}
            exerciseId={e.exerciseId}
            exerciseDescription={e.exerciseDescription}
            sets={e.sets}
            reps={e.reps}
            weight={e.weight}
            workoutId={workoutId}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const SWAP_WORKOUTS = gql(`
mutation swapExercises($workoutId: Int!, $exerciseId: Int!) {
  swapExercises(workoutId: $workoutId, exerciseId: $exerciseId) {
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
}`);

function ExerciseItem({
  exerciseId,
  exerciseDescription,
  sets,
  reps,
  weight,
  workoutId,
}: {
  exerciseId: number;
  exerciseDescription: string;
  sets: number;
  reps: string;
  weight?: string;
  workoutId: number;
}) {
  const [swapWorkouts, { loading }] = useMutation(SWAP_WORKOUTS);
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 100,
        gap: 8,
      }}
    >
      {getImageForWorkout(exerciseId)}
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 12,
          width: 120,
        }}
      >
        <ThemedText
          style={{
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 18,
          }}
        >
          {exerciseDescription}
        </ThemedText>
        <ThemedText
          style={{
            fontWeight: 400,
            color: "#262C45A6",
            fontSize: 12,
            lineHeight: 12,
          }}
        >
          {sets} sets x{" "}
          <ThemedText
            style={{
              fontWeight: 600,
              color: "#262C45A6",
              fontSize: 12,
              lineHeight: 12,
            }}
          >
            {reps}{" "}
          </ThemedText>
          {weight && `x ${weight}`}
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <ThemedCircleButton
          disabled={loading}
          icon={
            <Ionicons
              onPress={() => {
                swapWorkouts({
                  variables: {
                    workoutId: workoutId,
                    exerciseId: exerciseId,
                  },
                }).catch(console.error);
              }}
              name="shuffle"
              size={14}
              color="white"
            />
          }
        />
        <ThemedCircleButton
          icon={<Entypo name="dots-three-horizontal" size={14} color="white" />}
        />
      </ThemedView>
    </Animated.View>
  );
}

const getImageForWorkout = (exerciseId: number) => {
  const styles = StyleSheet.create({
    image: {
      width: 80,
      borderRadius: 22,
      height: 100,
    },
  });
  if (exerciseId === 1) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/1.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 2) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/2.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 3) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/3.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 4) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/4.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 5) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/5.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 6) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/6.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 7) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/7.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 8) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/8.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 9) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/9.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 10) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/10.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 11) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/11.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 12) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/12.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
  if (exerciseId === 13) {
    return (
      <Image
        source={
          require("@/assets/images/exercises/13.png") as ImageRequireSource
        }
        style={styles.image}
        resizeMode="contain"
      />
    );
  }
};
