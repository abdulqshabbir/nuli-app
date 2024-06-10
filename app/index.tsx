import {
  Image,
  StyleSheet,
  ImageRequireSource,
  Dimensions,
  ScrollView,
  View,
  TextProps,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView, ScrollableThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedButton, ThemedCircleButton } from "@/components/ThemedButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

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

type Exercise = {
  exerciseId: number;
  exerciseDescription: string;
  sets: number;
  reps: string;
  weight?: string;
};

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

function RightArrowIcon() {
  return (
    <Image
      source={require("@/assets/images/right_arrow.png") as ImageRequireSource}
      style={{
        height: 14,
        width: 14,
      }}
      resizeMode="contain"
    />
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

function NavigationBar() {
  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 32,
      }}
    >
      <ThemedView>
        <Image
          source={require("@/assets/images/back.png") as ImageRequireSource}
          style={styles.icon}
          resizeMode="contain"
        />
      </ThemedView>
      <ThemedView style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Image
          source={require("@/assets/images/gear.png") as ImageRequireSource}
          style={styles.icon}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/heart.png") as ImageRequireSource}
          resizeMode="contain"
          style={styles.icon}
        />
      </ThemedView>
    </ThemedView>
  );
}

function Header() {
  return (
    <ThemedView
      style={{
        paddingLeft: 32,
        display: "flex",
        gap: 10,
      }}
    >
      <ThemedText
        type="title"
        style={{
          fontSize: 26,
          paddingLeft: 8,
          fontFamily: "Work Sans Semi Bold",
        }}
      >
        Full Body
      </ThemedText>
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image
          source={require("@/assets/images/candice.png") as ImageRequireSource}
          resizeMode="contain"
          style={[
            styles.icon,
            {
              position: "relative",
              left: 3,
            },
          ]}
        />
        <ThemedText
          style={{
            fontWeight: 800,
            fontSize: 12,
            lineHeight: 12,
            fontFamily: "Open Sans Light",
          }}
        >
          WITH CANDICE
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

function HeroImage() {
  return (
    <ThemedView>
      <Image
        source={require("@/assets/images/hero.png") as ImageRequireSource}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 250,
        }}
      />
    </ThemedView>
  );
}

const CARD_WIDTH = 300;
const CARD_HEIGHT = 180;
function ScrollableCards() {
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

function Equipment() {
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

function BodyFocus() {
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

function BulletedListItem({ children }: { children: React.ReactNode }) {
  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      <ThemedText
        style={{
          fontSize: 11,
          position: "relative",
          top: -4,
        }}
      >
        {`\u2022`}
      </ThemedText>
      <ThemedText style={{ fontSize: 11 }}>{children}</ThemedText>
    </ThemedView>
  );
}

function NumberedListItem({
  number,
  children,
}: {
  children: React.ReactNode;
  number: number;
}) {
  return (
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      <ThemedText
        style={{
          fontSize: 11,
          alignSelf: "flex-start",
          position: "relative",
          top: -4,
        }}
      >{`${number}.`}</ThemedText>
      <ThemedText style={{ fontSize: 11 }}>{children}</ThemedText>
    </ThemedView>
  );
}

function InstructionsBaseText({
  children,
  bolded,
  ...rest
}: {
  bolded?: boolean;
  children: React.ReactNode;
  rest?: TextProps;
}) {
  return (
    <ThemedText
      style={{
        fontWeight: bolded ? 700 : 400,
        fontSize: 11,
        lineHeight: 15.4,
        fontFamily: "Open Sans Light",
      }}
      {...rest}
    >
      {children}
    </ThemedText>
  );
}

function Instructions() {
  return (
    <ThemedView
      style={{
        width: CARD_WIDTH,
        backgroundColor: Colors.light.instructions_background,
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
          backgroundColor: "transparent",
          gap: 7,
        }}
      >
        <ThemedText
          type="title"
          style={{
            fontSize: 24,
            fontFamily: "Work Sans Semi Bold",
          }}
        >
          Instructions
        </ThemedText>
        <ScrollableThemedView
          nestedScrollEnabled={true}
          style={{
            width: 210,
            height: 120,
            borderRadius: 18,
            display: "flex",
            paddingRight: 14,
            paddingLeft: 14,
          }}
        >
          <InstructionsBaseText>
            This training program will begin from a full body circuit training
            on the first day:
          </InstructionsBaseText>
          <BulletedListItem>
            <InstructionsBaseText>
              You will be able to learn{" "}
            </InstructionsBaseText>
            <InstructionsBaseText bolded>
              how to use different muscle groups
            </InstructionsBaseText>{" "}
            <InstructionsBaseText>
              from today&apos;s training.
            </InstructionsBaseText>
          </BulletedListItem>
          <BulletedListItem>
            <InstructionsBaseText>
              <InstructionsBaseText bolded>
                You will be able to learn
              </InstructionsBaseText>{" "}
              how to use different muscle groups.
            </InstructionsBaseText>
          </BulletedListItem>
          <InstructionsBaseText>
            This training program will begin from a full body circuit training
            on the first day:
          </InstructionsBaseText>
          <NumberedListItem number={1}>
            <InstructionsBaseText>You will be </InstructionsBaseText>
            <InstructionsBaseText bolded>
              able to learn
            </InstructionsBaseText>{" "}
            <InstructionsBaseText>
              how to use different muscle groups.
            </InstructionsBaseText>
          </NumberedListItem>
          <NumberedListItem number={2}>
            <InstructionsBaseText>
              You will be able to learn how to use different muscle groups from
              today’s training.
            </InstructionsBaseText>
          </NumberedListItem>
          <InstructionsBaseText>
            You will be able to learn how to use different muscle groups from
            today's training.
          </InstructionsBaseText>
        </ScrollableThemedView>
      </ThemedView>
      <ThemedView
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={
            require("@/assets/images/candice_running.png") as ImageRequireSource
          }
          style={{
            height: 120,
            borderRadius: 22,
            width: 100,
            position: "relative",
            right: 20,
          }}
          resizeMode="contain"
        />
      </ThemedView>
    </ThemedView>
  );
}

function StartWorkoutButton() {
  return <ThemedButton title="START WORKOUT" icon={<RightArrowIcon />} />;
}

function Workouts() {
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
  header: {
    fontSize: 26,
    fontWeight: "500",
    padding: 8,
  },
  icon: {
    width: 28,
    height: 28,
  },
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
