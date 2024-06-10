/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Exercise = {
  __typename?: 'Exercise';
  durationInMinutes: Scalars['Int']['output'];
  equipment?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  reps: Scalars['String']['output'];
  sets: Scalars['Int']['output'];
  workoutId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  workouts: Array<Workout>;
};

export type Workout = {
  __typename?: 'Workout';
  durationInMinutes: Scalars['Int']['output'];
  exercises: Array<Exercise>;
  id: Scalars['Int']['output'];
  numberOfExercises: Scalars['Int']['output'];
};

export type GetWorkoutsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkoutsQuery = { __typename?: 'Query', workouts: Array<{ __typename?: 'Workout', id: number, durationInMinutes: number, exercises: Array<{ __typename?: 'Exercise', id: number }> }> };


export const GetWorkoutsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWorkouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workouts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"durationInMinutes"}},{"kind":"Field","name":{"kind":"Name","value":"exercises"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetWorkoutsQuery, GetWorkoutsQueryVariables>;