import React from "react";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { ImageRequireSource, StyleSheet, Image } from "react-native";
import { ThemedCircleButton } from "../ThemedButton";

type Exercise = {
  exerciseId: number;
  exerciseDescription: string;
  sets: number;
  reps: string;
  weight?: string;
};

export function Workouts() {
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
          60 Min • 11 Exercises
        </ThemedText>
      </ThemedView>
      <ExerciseGroup
        groupName="Superset • 3 Rounds"
        exercises={[
          {
            exerciseId: 3,
            exerciseDescription: "Cable Kickback (Left)",
            sets: 3,
            reps: "15 reps",
          },
          {
            exerciseId: 4,
            exerciseDescription: "Cable Kickback (Right)",
            sets: 3,
            reps: "15 reps",
          },
          {
            exerciseId: 5,
            exerciseDescription: "Sumo Deadlift",
            sets: 4,
            reps: "10-12 reps",
            weight: "90kg",
          },
          {
            exerciseId: 4,
            exerciseDescription: "Dumbell Shoulder Press",
            sets: 4,
            reps: "8 reps",
            weight: "18-25kg",
          },
        ]}
      />
      <ExerciseGroup
        groupName="Triset • 4 Rounds"
        exercises={[
          {
            exerciseId: 7,
            exerciseDescription: "Single Arm Cable Row (Left)",
            sets: 4,
            reps: "10-12 reps",
          },
          {
            exerciseId: 8,
            exerciseDescription: "Single Arm Cable Row (Right)",
            sets: 4,
            reps: "10-12 reps",
          },
          {
            exerciseId: 9,
            exerciseDescription: "Cable Seated Rows",
            sets: 4,
            reps: "6-8 reps",
          },
        ]}
      />
      <ExerciseGroup
        groupName="Triset • 4 Rounds"
        exercises={[
          {
            exerciseId: 10,
            exerciseDescription: "Dumbbell Jump Squat",
            sets: 1,
            reps: "1 rep",
          },
          {
            exerciseId: 11,
            exerciseDescription: "Barbell Lunge",
            sets: 1,
            reps: "1 rep",
          },
          {
            exerciseId: 12,
            exerciseDescription: "Plank With Stability Ball",
            sets: 1,
            reps: "20 sec",
          },
          {
            exerciseId: 12,
            exerciseDescription: "Glute Bridge Hold",
            sets: 1,
            reps: "40 sec",
          },
        ]}
      />
    </ThemedView>
  );
}

function ExerciseGroup({
  groupName,
  exercises,
}: {
  groupName: string;
  exercises: Exercise[];
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
        {groupName}
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
        {exercises.map((e) => (
          <ExerciseItem
            exerciseId={e.exerciseId}
            exerciseDescription={e.exerciseDescription}
            sets={e.sets}
            reps={e.reps}
            weight={e.weight}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

function ExerciseItem({
  exerciseId,
  exerciseDescription,
  sets,
  reps,
  weight,
}: {
  exerciseId: number;
  exerciseDescription: string;
  sets: number;
  reps: string;
  weight?: string;
}) {
  return (
    <ThemedView
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
          icon={<Ionicons name="shuffle" size={14} color="white" />}
        />
        <ThemedCircleButton
          icon={<Entypo name="dots-three-horizontal" size={14} color="white" />}
        />
      </ThemedView>
    </ThemedView>
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
