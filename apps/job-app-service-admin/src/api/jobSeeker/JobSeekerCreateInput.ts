import { ApplicationCreateNestedManyWithoutJobSeekersInput } from "./ApplicationCreateNestedManyWithoutJobSeekersInput";
import { DocumentCreateNestedManyWithoutJobSeekersInput } from "./DocumentCreateNestedManyWithoutJobSeekersInput";

export type JobSeekerCreateInput = {
  name?: string | null;
  email?: string | null;
  skills?: string | null;
  applications?: ApplicationCreateNestedManyWithoutJobSeekersInput;
  documents?: DocumentCreateNestedManyWithoutJobSeekersInput;
};
