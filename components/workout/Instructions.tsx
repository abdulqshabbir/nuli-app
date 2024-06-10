import { CARD_WIDTH } from "@/constants/Sizes";
import React from "react";
import { ImageRequireSource, Image, TextProps } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";
import { ThemedView, ScrollableThemedView } from "../ThemedView";

export function Instructions() {
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
