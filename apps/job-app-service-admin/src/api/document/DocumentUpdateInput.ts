import { InputJsonValue } from "../../types";
import { JobSeekerWhereUniqueInput } from "../jobSeeker/JobSeekerWhereUniqueInput";

export type DocumentUpdateInput = {
  fileUrl?: InputJsonValue;
  name?: string | null;
  jobSeeker?: JobSeekerWhereUniqueInput | null;
};
