export type FretValue = string;

export type StringNotes = FretValue[];

export interface Measure {
  id: string;
  strings: StringNotes[];
}