import { ApplicationUpdateManyWithoutJobSeekersInput } from "./ApplicationUpdateManyWithoutJobSeekersInput";
import { DocumentUpdateManyWithoutJobSeekersInput } from "./DocumentUpdateManyWithoutJobSeekersInput";

export type JobSeekerUpdateInput = {
  name?: string | null;
  email?: string | null;
  skills?: string | null;
  applications?: ApplicationUpdateManyWithoutJobSeekersInput;
  documents?: DocumentUpdateManyWithoutJobSeekersInput;
};
